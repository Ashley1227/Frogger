import DimensionRenderer from "./DimensionRenderer.js";
import PixelatedCanvasRenderer from "./PixelatedCanvasRenderer.js";
export default class GameRenderer extends PixelatedCanvasRenderer {
    preInit(canvas) {
        super.preInit(canvas);
    }
    init(canvas) {
        super.init(canvas);
        this.ctx.imageSmoothingEnabled = false;
    }
    postInit(canvas) {
        super.postInit(canvas);
        this.addChild(new DimensionRenderer(canvas));
    }
    onResize() {
        super.onResize();
        this.ctx.imageSmoothingEnabled = false;
    }
    render() {
        super.render();
    }
}
//# sourceMappingURL=GameRenderer.js.map