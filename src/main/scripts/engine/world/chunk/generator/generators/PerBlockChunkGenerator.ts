import ChunkGenerator from "../ChunkGenerator";
import Chunk from "../../Chunk";
import BlockState from "../../../../block/state/BlockState";
import Vector2 from "../../../../math/Vector2";

export default abstract class PerBlockChunkGenerator extends ChunkGenerator {
    constructor() {
        super();
    }

    generate(chunk: Chunk): Chunk {
        for(let x = 0; x < Chunk.size.x; x++) {
            for(let y = 0; y < Chunk.size.y; y++) {
                this.generateBlock(chunk, new Vector2(x, y), new Vector2(x, y).add(chunk.position.multiply(Chunk.size)));
            }
        }
        return chunk;
    }

    abstract generateBlock(chunk: Chunk, relativePosition: Vector2, absolutePosition: Vector2): BlockState;
}