import Block from "../engine/block/Block.js";
import Registries from "../engine/registry/Registries.js";
import Registry from "../engine/registry/Registry.js";
import Identifier from "../engine/identifier/Identifier.js";

export default class Blocks {
    public static TEST: Block = Blocks.register(new Block(), "test");

    static register(block: Block, name: string): Block {
        return Registry.register(Registries.BLOCKS, block, new Identifier("frogger", name));
    }
}