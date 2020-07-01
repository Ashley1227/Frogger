import BlockType from "../../block/BlockType";
import World from "../World";
import BlockTypes from "../../../block/type/BlockTypes";
import Vector2 from "../../math/Vector2";

export default class Chunk {
    static width = 16;
    static height = 16;

    public world: World;
    public blocks: BlockType[][];

    public position: Vector2;

    constructor(world: World, position: Vector2) {
        this.world = world;
        this.position = position;
        this.fillWith(BlockTypes.GRASS);
    }

    fillWith(block: BlockType): Chunk {
        this.blocks = [];
        for (let x: number = 0; x < Chunk.height; x++) {
            this.blocks[x] = [];
            for (let y: number = 0; y < Chunk.width; y++) {
                this.blocks[x][y] = block;
            }
        }
        return this;
    }
}