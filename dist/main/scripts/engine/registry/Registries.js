import Registry from "./Registry.js";
import Identifier from "../identifier/Identifier.js";
export var REGISTRIES = new Registry();
REGISTRIES.IDENTIFIER = new Identifier("frogger", "registries");
export default class Registries {
}
Registries.WORLDS = Registry.register(REGISTRIES, new Registry(), new Identifier("frogger", "worlds"));
Registries.CHUNK_GENERATORS = Registry.register(REGISTRIES, new Registry(), new Identifier("frogger", "chunk_generators"));
Registries.BLOCKS = Registry.register(REGISTRIES, new Registry(), new Identifier("frogger", "blocks"));
//# sourceMappingURL=Registries.js.map