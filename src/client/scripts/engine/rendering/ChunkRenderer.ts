import PixelatedCanvasRenderer from "./PixelatedCanvasRenderer.js";
import Blocks from "../../../../main/scripts/block/Blocks.js";
import TextureUtils from "../resources/TextureUtils.js";

export default class ChunkRenderer extends PixelatedCanvasRenderer {
    preInit(canvas: HTMLCanvasElement): void {
        super.preInit(canvas);
    }
    init(canvas: HTMLCanvasElement): void {
        super.init(canvas);
    }
    postInit(canvas: HTMLCanvasElement): void {
        super.postInit(canvas);
    }
    render(): void {
        super.render();
        let size = 64;
        for (let y: number = 0; y < 16; y++) {
            for(let x: number = 0; x < 16; x++) {
                if ((x + y) % 2 == 0) {
                    this.drawTexture(TextureUtils.getBlockTexture(Blocks.DIRT), x * size, y * size, size, size)
                } else {
                    this.drawTexture(TextureUtils.getBlockTexture(Blocks.GRASS), x * size, y * size, size, size)
                }
            }
        }
    }
}