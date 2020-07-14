import BlockState from "../../../engine/block/state/BlockState";
import Vector2 from "../../../engine/math/Vector2";
import World from "../../../engine/world/World";
import Chunk from "../../../engine/world/chunk/Chunk";
import BlockType from "../../../engine/block/type/BlockType";

export default class GrassBlockState extends BlockState {

    constructor(type: BlockType) {
        super(type);
    }

    update(world: World, chunk: Chunk, worldPosition: Vector2, chunkPosition: Vector2) {
        super.update(world, chunk, worldPosition, chunkPosition);
    }

    clone(): BlockState {
        return new GrassBlockState(this.TYPE).setDefaultRenderer(this.RENDERER);
    }
}