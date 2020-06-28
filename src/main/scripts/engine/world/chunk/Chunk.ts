import Block from "../../block/Block.js";
import World from "../World.js";

export default class Chunk {
    static width = 16;
    static height = 16;

    public world: World;
    public blocks: Block[][];

    public x: number;
    public y: number;

    constructor(world: World, x: number, y: number) {
        this.world = world;
        this.x = x;
        this.y = y;
    }

    fillWith(block: Block): Chunk {
        for(let y: number = 0; y < Chunk.height; y++) {
            for(let x: number = 0; x < Chunk.width; x++) {
                this.blocks[x][y] = block;
            }
        }
        return this;
    }
}