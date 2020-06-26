export default abstract class Renderer {
    public canvas: HTMLCanvasElement;

    public children: Renderer[];
    public shouldRender: boolean = true;

    public xOffset: number = 0;
    public yOffset: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.preInit(canvas);
        this.init(canvas);
        this.postInit(canvas);
    };

    offset(x: number, y: number): Renderer {
        this.xOffset = x;
        this.yOffset = y;
        return this;
    }

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

    addChild(child: Renderer) {
        this.children.push(child);
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