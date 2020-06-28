import Block from "../engine/block/Block.js";
import Registries from "../engine/registry/Registries.js";
import Registry from "../engine/registry/Registry.js";
import Identifier from "../engine/identifier/Identifier.js";
import BlockSettings from "../engine/block/BlockSettings.js";

export default class Blocks {
    public static DIRT: Block = Blocks.register(
        new Block(
            new BlockSettings()
                .texture(
                    new Identifier("frogger", "dirt")
            )
        ),
        "dirt"
    );
    public static GRASS: Block = Blocks.register(
        new Block(
            new BlockSettings()
                .texture(new Identifier("frogger", "grass")
            )
        ),
        "grass"
    );

    static register(block: Block, name: string): Block {
        return Registry.register(Registries.BLOCKS, block, new Identifier("frogger", name));
    }
}