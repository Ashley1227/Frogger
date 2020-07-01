import CanvasRenderer from "./CanvasRenderer";

export default class PixelatedCanvasRenderer extends CanvasRenderer {
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.ctx.imageSmoothingEnabled = false;
    }
    onResize(): void {
        super.onResize();
        this.ctx.imageSmoothingEnabled = false;
    }

}