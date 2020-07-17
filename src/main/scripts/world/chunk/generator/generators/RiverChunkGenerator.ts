import PerBlockChunkGenerator from "../../../../engine/world/chunk/generator/generators/PerBlockChunkGenerator";
import BlockState from "../../../../engine/block/state/BlockState";
import Vector2 from "../../../../engine/math/Vector2";
import Chunk from "../../../../engine/world/chunk/Chunk";
import BlockTypes from "../../../../block/type/BlockTypes";
import Noise from "../../../../engine/math/noise/Noise";

export default class RiverChunkGenerator extends PerBlockChunkGenerator {
    public noise: Noise;

    public constructor(seed?: number) {
        super();
        this.noise = new Noise(seed);
    }

    public generateBlock(chunk: Chunk, relativePosition: Vector2, absolutePosition: Vector2): BlockState {
        if(this.noise.simplex2(0, absolutePosition.y / 8) > 0.3) {
            return chunk.setBlockStateRelativeToChunk(relativePosition, BlockTypes.WATER.createState());
        }
    }

}