import Registry from "../../../engine/registry/Registry";
import Registries from "../../../engine/registry/Registries";
import Identifier from "../../../engine/identifier/Identifier";
import ChunkGenerator from "../../../engine/world/chunk/generator/ChunkGenerator";
import BasicChunkGenerator from "../../../engine/world/chunk/generator/generators/BasicChunkGenerator";
import BlockTypes from "../../../block/type/BlockTypes";
import RandomReplaceChunkGenerator from "../../../engine/world/chunk/generator/generators/RandomReplaceChunkGenerator";

console.debug("");
console.debug("Chunk Generators");
console.debug("==========");
export default class ChunkGenerators {
    static GRASS: ChunkGenerator = ChunkGenerators.register(new BasicChunkGenerator(BlockTypes.GRASS), "grass");
    static FLOWERS: ChunkGenerator = ChunkGenerators.register(new RandomReplaceChunkGenerator(BlockTypes.GRASS.DEFAULT_STATE, BlockTypes.RED_FLOWER.DEFAULT_STATE, 0.95), "flowers");

    static register(generator: ChunkGenerator, name: string): ChunkGenerator {
        return Registry.register(Registries.CHUNK_GENERATORS, generator, new Identifier("frogger", name));
    }
}