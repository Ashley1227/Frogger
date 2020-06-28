export default abstract class Renderer {
    public canvas: HTMLCanvasElement;

    public parent: Renderer;
    public children: Renderer[];
    public shouldRender: boolean = true;

    public xOffset: number = 0;
    public yOffset: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.preInit(canvas);
        this.init(canvas);
        this.postInit(canvas);
    };

    preInit(canvas: HTMLCanvasElement): void {
        this.canvas = canvas;
        this.children = [];
    };

    init(canvas: HTMLCanvasElement): void {
        canvas.parentElement.onresize = () => {
            this.onResize();
        };
    }
    postInit(canvas: HTMLCanvasElement): void {
        this.onResize();
    };

    /**
     * Offset relative to where it currently is
     */
    offset(x: number, y: number): Renderer {
        for(let renderer of this.children) {
            renderer.offset(x, y);
        }
        this.xOffset += x;
        this.yOffset +=  y;
        return this;
    }

    /**
     * Absolute offset–change the offset to a set value
     */
    offsetAbs(x: number, y: number): Renderer {
        for(let renderer of this.children) {
            renderer.offsetAbs(x + this.xOffset - renderer.xOffset, y + this.yOffset - renderer.yOffset);
        }
        this.xOffset = x;
        this.yOffset = y;
        return this;
    }

    addChild(child: Renderer): Renderer {
        child.parent = this;
        this.children.push(child);
        return child;
    }

    onResize(): void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.render();
    }

    render(): void {
        for(let c of this.children) {
            if(c.shouldRender)
                c.render();
        }
    };
}