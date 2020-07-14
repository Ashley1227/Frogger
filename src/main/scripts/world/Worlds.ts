import World from "../engine/world/World";
import Identifier from "../engine/identifier/Identifier";
import Registries from "../engine/registry/Registries";
import Registry from "../engine/registry/Registry";
import FroggerWorld from "./worlds/FroggerWorld";
import ChunkGenerators from "./chunk/generator/ChunkGenerators";

console.debug("");
console.debug("Worlds");
console.debug("==========");
export default class Worlds {
    public static WORLD: FroggerWorld = Worlds.register(new FroggerWorld().addGenerators(ChunkGenerators.GRASS, ChunkGenerators.ROADS, ChunkGenerators.FLOWERS), "world");

    static register(world: World, name: string): World {
        return Registry.register(Registries.WORLDS, world, new Identifier("frogger", name));
    }
}