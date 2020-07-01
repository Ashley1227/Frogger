import Identifiable from "../../../identifier/Identifiable";
import Identifier from "../../../identifier/Identifier";
import Chunk from "../Chunk";

export default abstract class ChunkGenerator implements Identifiable {
    IDENTIFIER: Identifier;

    abstract generate(chunk: Chunk): Chunk;
}