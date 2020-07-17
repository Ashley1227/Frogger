import BlockType from "../type/BlockType";
import Vector2 from "../../math/Vector2";
import Chunk from "../../world/chunk/Chunk";
import World from "../../world/World";
import BlockStateRenderer from "../../../../../client/scripts/engine/block/state/renderer/BlockStateRenderer";

export default class BlockState {
    public TYPE: BlockType;

    public RENDERER: BlockStateRenderer<this>;

    constructor(type: BlockType) {
        this.TYPE = type;
    }

    public update(world: World, chunk: Chunk, worldPosition: Vector2, chunkPosition: Vector2) {

    }

    public randomTick(world: World, chunk: Chunk, worldPosition: Vector2, chunkPosition: Vector2): void {
        
    }

    public setDefaultRenderer(renderer: BlockStateRenderer<this>): BlockState {
        this.RENDERER = renderer;
        return this;
    }

    public getRenderer(position: Vector2): BlockStateRenderer<this> {
        return this.RENDERER;
    }

    public clone() {
        return new BlockState(this.TYPE).setDefaultRenderer(this.RENDERER);
    }
}