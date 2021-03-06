import Registry from "./Registry";
import Identifier from "../identifier/Identifier";
import BlockType from "../block/type/BlockType";
import World from "../world/World";
import ChunkGenerator from "../world/chunk/generator/ChunkGenerator";
import BlockRenderType from "../block/type/BlockRenderType";
import EntityType from "../entity/type/EntityType";
import Tag from "../tag/Tag";
import EntityBehavior from "../entity/behavior/EntityBehavior";

console.debug("");
console.debug("Main Registries");
console.debug("==========");
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
    public static BLOCK_TYPES: Registry<BlockType> = Registry.register(
        REGISTRIES,
        new Registry<BlockType>(),
        new Identifier("frogger","block_types")
    );
    public static BLOCK_RENDER_TYPES: Registry<BlockRenderType> = Registry.register(
        REGISTRIES,
        new Registry<BlockRenderType>(),
        new Identifier("frogger","block_render_types")
    );
    public static ENTITY_TYPES: Registry<EntityType> = Registry.register(
        REGISTRIES,
        new Registry<EntityType>(),
        new Identifier("frogger","entity_types")
    );
    public static TAGS: Registry<Tag<any>> = Registry.register(
        REGISTRIES,
        new Registry<Tag<any>>(),
        new Identifier("frogger","tags")
    );
}
