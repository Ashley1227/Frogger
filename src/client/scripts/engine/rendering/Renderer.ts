export default abstract class Renderer {
    public canvas: HTMLCanvasElement;

    public parent: Renderer;
    public children: Renderer[];
    public shouldRender: boolean = true;

    public xOffset: number = 0;
    public yOffset: number = 0;

    private cFPS = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.children = [];
        canvas.parentElement.onresize = () => {
            this.onResize();
        };
        setInterval(() => {
            this.countFPS(this.cFPS);
            this.cFPS = 0;
        }, 1000);
    };

    initialise(): void {
        this.onResize();
    }

    countFPS(fps: number) {

    }

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
        this.cFPS++;
    };
}