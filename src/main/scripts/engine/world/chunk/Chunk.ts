import World from "../World";
import Vector2 from "../../math/Vector2";
import BlockState from "../../block/state/BlockState";

export default class Chunk {
    public static size: Vector2 = new Vector2(16, 16);

    public world: World;
    public blocks: BlockState[][];

    public position: Vector2;

    constructor(world: World, position: Vector2) {
        this.world = world;
        this.position = position;
    }

    tick(): Chunk {
        return this;
    }

    fillWith(state: BlockState): Chunk {
        this.blocks = [];
        for (let x: number = 0; x < Chunk.size.x; x++) {
            this.blocks[x] = [];
            for (let y: number = 0; y < Chunk.size.y; y++) {
                this.setBlockStateRelativeToChunk(new Vector2(x, y), state.clone());
            }
        }
        return this;
    }

    setBlockStateRelativeToChunk(position: Vector2, state: BlockState): BlockState {
        if(!state)
            return;
        state.update(this.world, this, this.position.multiply(Chunk.size).add(position), position);
        this.blocks[position.x][position.y] = state;
        return state;
    }
    setBlockState(position: Vector2, state: BlockState): BlockState {
        return this.setBlockStateRelativeToChunk(position.subtract(this.position.multiply(Chunk.size)), state);
    }

    getBlockStateRelativeToChunk(position: Vector2): BlockState {
        return this.blocks[position.x][position.y];
    }
    getBlockState(position: Vector2): BlockState {
        return this.blocks[-this.position.x * Chunk.size.x + position.x][-this.position.y * Chunk.size.y + position.y];
    }

    updateAll() {
        for(let x = 0; x < Chunk.size.x; x++) {
            for(let y = 0; y < Chunk.size.y; y++) {
                let pos = new Vector2(x, y);
                this.getBlockStateRelativeToChunk(pos).update(this.world, this, this.position.multiply(Chunk.size).add(pos), pos);
            }
        }
    }
}