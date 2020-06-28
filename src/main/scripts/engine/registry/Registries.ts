import Registry from "./Registry.js";
import Identifier from "../identifier/Identifier.js";
import Block from "../block/Block.js";
import World from "../world/World.js";
import ChunkGenerator from "../world/chunk/generator/ChunkGenerator.js";

export var REGISTRIES: Registry<Registry<any>> = new Registry<Registry<any>>();
REGISTRIES.IDENTIFIER = new Identifier("frogger","registries");
export default class Registries {
    public static WORLDS: Registry<World> = Registry.register(
        REGISTRIES,
        new Registry<World>(),
        new Identifier("frogger","worlds")
    );
    public static CHUNK_GENERATORS: Registry<ChunkGenerator> = Registry.register(
        REGISTRIES,
        new Registry<ChunkGenerator>(),
        new Identifier("frogger","chunk_generators")
    );
    public static BLOCKS: Registry<Block> = Registry.register(
        REGISTRIES,
        new Registry<Block>(),
        new Identifier("frogger","blocks")
    );
}
