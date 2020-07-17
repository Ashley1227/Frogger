import World from "../World";
import Vector2 from "../../math/Vector2";
import BlockState from "../../block/state/BlockState";
import Random from "../../math/Random";

export default class Chunk {
    public static readonly SIZE: Vector2 = new Vector2(16, 16);

    public random: Random;
    public world: World;
    public blocks: BlockState[][];

    public position: Vector2;

    public shouldUnload: boolean;

    constructor(world: World, position: Vector2) {
        this.world = world;
        this.position = position;

        this.shouldUnload = false;
        this.random = new Random();
    }

    tick(): Chunk {
        for(let i = 0; i < this.world.settings.randomTickSpeed; i++) {
            let position: Vector2 = this.getRandomPosition();
            let state: BlockState = this.getBlockStateRelativeToChunk(position);

            state.randomTick(this.world, this, this.position.multiply(Chunk.SIZE).add(position), position);
        }

        this.shouldUnload = true;
        return this;
    }

    fillWith(state: BlockState): Chunk {
        this.blocks = [];
        for (let x: number = 0; x < Chunk.SIZE.x; x++) {
            this.blocks[x] = [];
            for (let y: number = 0; y < Chunk.SIZE.y; y++) {
                this.setBlockStateRelativeToChunk(new Vector2(x, y), state.clone());
            }
        }
        return this;
    }

    setBlockStateRelativeToChunk(position: Vector2, state: BlockState): BlockState {
        if(!state)
            return;
        state.update(this.world, this, this.position.multiply(Chunk.SIZE).add(position), position);
        this.blocks[position.x][position.y] = state;
        return state;
    }
    setBlockState(position: Vector2, state: BlockState): BlockState {
        return this.setBlockStateRelativeToChunk(position.subtract(this.position.multiply(Chunk.SIZE)), state);
    }

    getBlockStateRelativeToChunk(position: Vector2): BlockState {
        return this.blocks[position.x][position.y];
    }
    getBlockState(position: Vector2): BlockState {
        return this.blocks[-this.position.x * Chunk.SIZE.x + position.x][-this.position.y * Chunk.SIZE.y + position.y];
    }

    getRandomPosition(): Vector2 {
        return this.random.nextIntVector2InRange(Vector2.ZERO, Chunk.SIZE);
    }
    getRandomBlockState(): BlockState {
        return this.getBlockStateRelativeToChunk(this.getRandomPosition());
    }

    updateAll() {
        for(let x = 0; x < Chunk.SIZE.x; x++) {
            for(let y = 0; y < Chunk.SIZE.y; y++) {
                let pos = new Vector2(x, y);
                this.getBlockStateRelativeToChunk(pos).update(this.world, this, this.position.multiply(Chunk.SIZE).add(pos), pos);
            }
        }
    }
}