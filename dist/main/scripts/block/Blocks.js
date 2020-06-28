import Block from "../engine/block/Block.js";
import Registries from "../engine/registry/Registries.js";
import Registry from "../engine/registry/Registry.js";
import Identifier from "../engine/identifier/Identifier.js";
import BlockSettings from "../engine/block/BlockSettings.js";
export default class Blocks {
    static register(block, name) {
        return Registry.register(Registries.BLOCKS, block, new Identifier("frogger", name));
    }
}
Blocks.DIRT = Blocks.register(new Block(new BlockSettings()
    .texture(new Identifier("frogger", "dirt"))), "dirt");
Blocks.GRASS = Blocks.register(new Block(new BlockSettings()
    .texture(new Identifier("frogger", "grass"))), "grass");
//# sourceMappingURL=Blocks.js.map