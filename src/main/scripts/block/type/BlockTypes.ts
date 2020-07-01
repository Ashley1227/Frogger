import BlockType from "../../engine/block/BlockType";
import Registries from "../../engine/registry/Registries";
import Registry from "../../engine/registry/Registry";
import Identifier from "../../engine/identifier/Identifier";
import BlockSettings from "../../engine/block/BlockSettings";
import GrassBlockType from "./types/GrassBlockType";

console.debug("");
console.debug("Block Types");
console.debug("==========");
export default class BlockTypes {
    public static DIRT: BlockType = BlockTypes.register(
        new BlockType(
            new BlockSettings()
                .texture(new Identifier("frogger", "dirt")
            )
        ),
        "dirt"
    );
    public static GRASS: BlockType = BlockTypes.register(
        new GrassBlockType(
            new BlockSettings()
                .texture(new Identifier("frogger", "grass")
            )
        ),
        "grass"
    );

    static register(block: BlockType, name: string): BlockType {
        return Registry.register(Registries.BLOCK_TYPES, block, new Identifier("frogger", name));
    }
}