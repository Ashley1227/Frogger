import CanvasRenderer from "./CanvasRenderer.js";
import Textures from "../resources/Textures.js";

export default class ChunkRenderer extends CanvasRenderer {
    preInit(canvas: HTMLCanvasElement) {
        super.preInit(canvas);
    }
    init(canvas: HTMLCanvasElement) {
        super.init(canvas);
        this.ctx.imageSmoothingEnabled = false;
    }
    postInit(canvas: HTMLCanvasElement) {
        super.postInit(canvas);
    }
    onResize() {
        super.onResize();
        this.ctx.imageSmoothingEnabled = false;
    }

    render() {
        super.render();
        let size = 64;
        for (let y: number = 0; y < 16; y++) {
            for(let x: number = 0; x < 16; x++) {
                this.drawTexture(Textures.DIRT, x * size, y  * size, size, size)
            }
        }

    }

}