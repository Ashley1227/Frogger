import PixelatedCanvasRenderer from "../engine/rendering/PixelatedCanvasRenderer";
import TextureUtils from "../engine/resources/TextureUtils";
import Chunk from "../../../main/scripts/engine/world/chunk/Chunk";

export default class ChunkRenderer extends PixelatedCanvasRenderer {
    public chunk: Chunk;

    constructor(canvas: HTMLCanvasElement, chunk: Chunk) {
        super(canvas);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;

        this.chunk = chunk;
    }

    render(): void {
        super.render();
        let size = 64;
        for (let y: number = 0; y < 16; y++) {
            for(let x: number = 0; x < 16; x++) {
                this.drawTexture(TextureUtils.getBlockTexture(this.chunk.blocks[x][y]), x * size, y * size, size, size)
            }
        }
    }
}