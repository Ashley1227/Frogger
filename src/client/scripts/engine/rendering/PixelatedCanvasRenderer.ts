import CanvasRenderer from "./CanvasRenderer.js";

export default class DimensionRenderer extends CanvasRenderer {
    preInit(canvas: HTMLCanvasElement): void {
        super.preInit(canvas);
    }
    init(canvas: HTMLCanvasElement): void {
        super.init(canvas);
        this.ctx.imageSmoothingEnabled = false;
    }
    postInit(canvas: HTMLCanvasElement): void {
        super.postInit(canvas);
    }
    onResize(): void {
        super.onResize();
        this.ctx.imageSmoothingEnabled = false;
    }

}