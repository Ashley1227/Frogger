import PerBlockChunkGenerator from "../../../../engine/world/chunk/generator/generators/PerBlockChunkGenerator";
import BlockState from "../../../../engine/block/state/BlockState";
import Vector2 from "../../../../engine/math/Vector2";
import Chunk from "../../../../engine/world/chunk/Chunk";
import BlockTypes from "../../../../block/type/BlockTypes";
import {abs} from "../../../../engine/math/math";

export default class RoadChunkGenerator extends PerBlockChunkGenerator {
    generateBlock(chunk: Chunk, relativePosition: Vector2, absolutePosition: Vector2): BlockState {
        if(abs(absolutePosition.y% 32) < 3) {
            return chunk.setBlockStateRelativeToChunk(relativePosition, BlockTypes.ASPHALT.createState());
        }
        return;
    }
}