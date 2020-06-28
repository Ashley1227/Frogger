import ChunkGenerator from "../ChunkGenerator.js";
import Chunk from "../../Chunk.js";
import Block from "../../../../block/Block.js";

export default class BasicChunkGenerator extends ChunkGenerator {
    public block: Block;

    constructor(block: Block) {
        super();
        this.block = block;
    }
    generate(chunk: Chunk): Chunk {
        chunk.fillWith(this.block);
        return chunk;
    }
}