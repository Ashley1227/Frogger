import Block from "../engine/block/Block.js";
import Registries from "../engine/registry/Registries.js";
import Registry from "../engine/registry/Registry.js";
import Identifier from "../engine/identifier/Identifier.js";
export default class Blocks {
    static register(block, name) {
        return Registry.register(Registries.BLOCKS, block, new Identifier("frogger", name));
    }
}
Blocks.TEST = Blocks.register(new Block(), "test");
//# sourceMappingURL=Blocks.js.map