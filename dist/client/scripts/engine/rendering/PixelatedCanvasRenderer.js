import CanvasRenderer from "./CanvasRenderer.js";
export default class DimensionRenderer extends CanvasRenderer {
    preInit(canvas) {
        super.preInit(canvas);
    }
    init(canvas) {
        super.init(canvas);
        this.ctx.imageSmoothingEnabled = false;
    }
    postInit(canvas) {
        super.postInit(canvas);
    }
    onResize() {
        super.onResize();
        this.ctx.imageSmoothingEnabled = false;
    }
}
//# sourceMappingURL=PixelatedCanvasRenderer.js.map