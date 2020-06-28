import PixelatedCanvasRenderer from "./PixelatedCanvasRenderer.js";
import WorldRenderer from "./WorldRenderer.js";
export default class GameRenderer extends PixelatedCanvasRenderer {
    preInit(canvas) {
        super.preInit(canvas);
    }
    init(canvas) {
        super.init(canvas);
    }
    postInit(canvas) {
        super.postInit(canvas);
        this.addChild(new WorldRenderer(canvas));
    }
    render() {
        super.render();
    }
}
//# sourceMappingURL=GameRenderer.js.map