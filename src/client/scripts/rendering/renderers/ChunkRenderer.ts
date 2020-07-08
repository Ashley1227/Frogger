import PixelatedCanvasRenderer from "../../engine/rendering/renderer/renderers/PixelatedCanvasRenderer";
import Chunk from "../../../../main/scripts/engine/world/chunk/Chunk";
import Vector2 from "../../../../main/scripts/engine/math/Vector2";
import BlockStateRenderer from "../../engine/block/state/renderer/BlockStateRenderer";
import BlockState from "../../../../main/scripts/engine/block/state/BlockState";
import ClientRegistries from "../../engine/registry/ClientRegistries";

export default class ChunkRenderer extends PixelatedCanvasRenderer {
    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    renderChunk(chunk: Chunk): void {
        super.render();
        let size = new Vector2(64, 64);
        for (let y: number = 0; y < 16; y++) {
            for(let x: number = 0; x < 16; x++) {
                let blockState: BlockState = chunk.blocks[x][y];
                (<BlockStateRenderer>ClientRegistries.RENDERERS.get(blockState.RENDERER)).renderBlockState(
                    chunk.position.multiply(chunk.size).add(new Vector2(x, y)).multiply(size),
                    size,
                    chunk.position.multiply(chunk.size).add(new Vector2(x, y)),
                    chunk.blocks[x][y]
                );
            }
        }
        this.finishRender();
    }
}