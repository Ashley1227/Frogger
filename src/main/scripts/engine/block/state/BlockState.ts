import Identifier from "../../identifier/Identifier";
import BlockType from "../type/BlockType";
import Vector2 from "../../math/Vector2";
import Chunk from "../../world/chunk/Chunk";
import World from "../../world/World";

export default class BlockState {
    public TYPE: BlockType;

    public RENDERER: Identifier;

    constructor(type: BlockType) {
        this.TYPE = type;
    }

    update(world: World, chunk: Chunk, worldPosition: Vector2, chunkPosition: Vector2) {

    }

    setDefaultRenderer(renderer: Identifier): BlockState {
        this.RENDERER = renderer;
        return this;
    }

    getRenderer(position: Vector2): Identifier {
        return this.RENDERER;
    }

    clone() {
        return new BlockState(this.TYPE).setDefaultRenderer(this.RENDERER);
    }
}