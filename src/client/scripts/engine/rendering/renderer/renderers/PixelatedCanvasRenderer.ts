import CanvasRenderer from "./CanvasRenderer";

export default class PixelatedCanvasRenderer extends CanvasRenderer {
    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    initialise() {
        super.initialise();
        this.ctx.imageSmoothingEnabled = false;
        return this;
    }

    onResize(): void {
        super.onResize();
        this.ctx.imageSmoothingEnabled = false;
    }

}