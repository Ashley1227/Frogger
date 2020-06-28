import Identifiable from "../../../identifier/Identifiable.js";
import Identifier from "../../../identifier/Identifier.js";
import Chunk from "../Chunk.js";

export default abstract class ChunkGenerator implements Identifiable {
    IDENTIFIER: Identifier;

    abstract generate(chunk: Chunk): Chunk;
}