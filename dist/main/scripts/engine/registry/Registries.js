import Registry from "./Registry.js";
import Identifier from "../identifier/Identifier.js";
export var REGISTRIES = new Registry();
REGISTRIES.setIdentifier(new Identifier("frogger", "registries"));
export default class Registries {
}
Registries.TEXTURES = Registry.register(REGISTRIES, new Registry(), new Identifier("frogger", "textures"));
Registries.BLOCKS = Registry.register(REGISTRIES, new Registry(), new Identifier("frogger", "blocks"));
//# sourceMappingURL=Registries.js.map