import World from "../World";
import Vector2 from "../../math/Vector2";
import BlockState from "../../block/state/BlockState";

export default class Chunk {
    public size: Vector2 = new Vector2(16, 16);

    public world: World;
    public blocks: BlockState[][];

    public position: Vector2;

    constructor(world: World, position: Vector2) {
        this.world = world;
        this.position = position;
        this.fillWith(null);
    }

    fillWith(block: BlockState): Chunk {
        this.blocks = [];
        for (let x: number = 0; x < this.size.x; x++) {
            this.blocks[x] = [];
            for (let y: number = 0; y < this.size.y; y++) {
                this.blocks[x][y] = block;
            }
        }
        return this;
    }

    setBlock(x: number, y: number, state: BlockState): Chunk {
        this.blocks[x][y] = state;
        return this;
    }
}