import ChunkGenerator from "../ChunkGenerator";
import Chunk from "../../Chunk";
import BlockType from "../../../../block/BlockType";

export default class BasicChunkGenerator extends ChunkGenerator {
    public block: BlockType;

    constructor(block: BlockType) {
        super();
        this.block = block;
    }
    generate(chunk: Chunk): Chunk {
        chunk.fillWith(this.block);
        return chunk;
    }
}