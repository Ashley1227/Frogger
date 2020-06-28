import ChunkRenderer from "./ChunkRenderer.js";
import PixelatedCanvasRenderer from "./PixelatedCanvasRenderer.js";
export default class DimensionRenderer extends PixelatedCanvasRenderer {
    preInit(canvas) {
        super.preInit(canvas);
    }
    init(canvas) {
        super.init(canvas);
    }
    postInit(canvas) {
        super.postInit(canvas);
        this.addChild(new ChunkRenderer(canvas));
    }
    render() {
        super.render();
    }
}
//# sourceMappingURL=DimensionRenderer.js.map