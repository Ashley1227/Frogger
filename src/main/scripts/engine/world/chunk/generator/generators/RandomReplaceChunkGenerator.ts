import Chunk from "../../Chunk";
import Random from "../../../../math/Random";
import Vector2 from "../../../../math/Vector2";
import BlockType from "../../../../block/type/BlockType";
import {abs} from "../../../../math/math";
import PerBlockChunkGenerator from "./PerBlockChunkGenerator";
import BlockState from "../../../../block/state/BlockState";

export default class RandomReplaceChunkGenerator extends PerBlockChunkGenerator {
    public block1: BlockType;
    public block2: BlockType;

    public threshold: number;

    public random: Random;

    constructor(block1: BlockType, block2: BlockType, threshold: number) {
        super();
        this.block1 = block1;
        this.block2 = block2;

        this.threshold = threshold;

        this.random = new Random();
    }
    generate(chunk: Chunk): Chunk {
        this.random.state = abs(chunk.position.x * Chunk.size.x * chunk.position.x * Chunk.size.x * chunk.position.y * Chunk.size.y);
        return super.generate(chunk);
    }

    generateBlock(chunk: Chunk, relativePosition: Vector2): BlockState {
        if(chunk.getBlockStateRelativeToChunk(relativePosition).TYPE == this.block1)
            return chunk.setBlockStateRelativeToChunk(relativePosition, this.random.nextFloat() > this.threshold ? this.block2.createState() : this.block1.createState());
        else
            return null;

    }
}