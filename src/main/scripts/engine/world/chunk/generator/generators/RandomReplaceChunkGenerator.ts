import ChunkGenerator from "../ChunkGenerator";
import Chunk from "../../Chunk";
import BlockState from "../../../../block/state/BlockState";
import Random from "../../../../math/Random";

export default class RandomReplaceChunkGenerator extends ChunkGenerator {
    public block1: BlockState;
    public block2: BlockState;

    public threshold: number;

    constructor(block1: BlockState, block2: BlockState, threshold: number) {
        super();
        this.block1 = block1;
        this.block2 = block2;

        this.threshold = threshold;
    }

    generate(chunk: Chunk): Chunk {
        for(let x = 0; x < chunk.size.x; x++) {
            for(let y = 0; y < chunk.size.y; y++) {
                if(Random.nextFloat() > this.threshold) {
                    if (chunk.blocks[x][y] == this.block1) {
                        chunk.setBlock(x, y, this.block2);
                    }
                }
            }
        }
        return chunk;
    }
}