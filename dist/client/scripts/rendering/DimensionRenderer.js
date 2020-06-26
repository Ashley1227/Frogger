import CanvasRenderer from "./CanvasRenderer.js";
import ChunkRenderer from "./ChunkRenderer.js";
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
        this.addChild(new ChunkRenderer(canvas));
    }
    onResize() {
        super.onResize();
        this.ctx.imageSmoothingEnabled = false;
    }
    render() {
        super.render();
    }
}
//# sourceMappingURL=DimensionRenderer.js.map