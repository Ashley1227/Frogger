import Textures from "../resources/Textures.js";
import PixelatedCanvasRenderer from "./PixelatedCanvasRenderer.js";
export default class ChunkRenderer extends PixelatedCanvasRenderer {
    preInit(canvas) {
        super.preInit(canvas);
    }
    init(canvas) {
        super.init(canvas);
    }
    postInit(canvas) {
        super.postInit(canvas);
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