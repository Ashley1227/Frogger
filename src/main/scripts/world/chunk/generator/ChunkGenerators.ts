import Registry from "../../../engine/registry/Registry.js";
import Registries from "../../../engine/registry/Registries.js";
import Identifier from "../../../engine/identifier/Identifier.js";
import ChunkGenerator from "../../../engine/world/chunk/generator/ChunkGenerator.js";
import BasicChunkGenerator from "../../../engine/world/chunk/generator/generators/BasicChunkGenerator.js";
import Blocks from "../../../block/Blocks.js";

export default class ChunkGenerators {
    static GRASS: ChunkGenerator = ChunkGenerators.register(new BasicChunkGenerator(Blocks.GRASS), "grass");

    static register(generator: ChunkGenerator, name: string): ChunkGenerator {
        return Registry.register(Registries.CHUNK_GENERATORS, generator, new Identifier("frogger", name));
    }
}