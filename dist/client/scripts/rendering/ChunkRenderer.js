import CanvasRenderer from "./CanvasRenderer.js";
import Textures from "../resources/Textures.js";
export default class ChunkRenderer extends CanvasRenderer {
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
    render() {
        super.render();
        let size = 64;
        for (let y = 0; y < 16; y++) {
            for (let x = 0; x < 16; x++) {
                this.drawTexture(Textures.DIRT, x * size, y * size, size, size);
            }
        }
    }
}
//# sourceMappingURL=ChunkRenderer.js.map