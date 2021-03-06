import Chunk from "../../../../main/scripts/engine/world/chunk/Chunk";
import Vector2 from "../../../../main/scripts/engine/math/Vector2";
import BlockState from "../../../../main/scripts/engine/block/state/BlockState";
import CameraCanvasRenderer from "../../engine/rendering/renderer/renderers/CameraCanvasRenderer";

export default class ChunkRenderer extends CameraCanvasRenderer {
    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    renderChunk(chunk: Chunk): void {
        super.render();
        for (let y: number = 0; y < 16; y++) {
            for(let x: number = 0; x < 16; x++) {
                let pos = new Vector2(x, y);
                let blockState: BlockState = chunk.getBlockStateRelativeToChunk(pos);
                blockState.getRenderer(pos).renderBlockState(
                    chunk.position.multiply(Chunk.SIZE).add(pos),
                    chunk.getBlockStateRelativeToChunk(pos)
                );
            }
        }
        this.finishRender();
    }
}