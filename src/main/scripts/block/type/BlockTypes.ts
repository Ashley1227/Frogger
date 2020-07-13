import BlockType from "../../engine/block/type/BlockType";
import Registries from "../../engine/registry/Registries";
import Registry from "../../engine/registry/Registry";
import Identifier from "../../engine/identifier/Identifier";
import BlockSettings from "../../engine/block/type/BlockSettings";
import GrassBlockType from "./types/GrassBlockType";
import BlockState from "../../engine/block/state/BlockState";
import Textures from "../../../../client/scripts/Textures";
import Renderers from "../../../../client/scripts/rendering/Renderers";
import GrassBlockState from "../state/states/GrassBlockState";

console.debug("");
console.debug("Block Types");
console.debug("==========");
export default class BlockTypes {
    public static DIRT: BlockType = BlockTypes.register(
        new BlockType(
            new BlockSettings()
        ),
        "dirt"
    );
    public static GRASS: BlockType = BlockTypes.register(
        new GrassBlockType(
            new BlockSettings()
        ),
        "grass"
    );
    public static RED_FLOWER: BlockType = BlockTypes.register(
        new GrassBlockType(
            new BlockSettings()
        ),
        "red_flower"
    );
    public static ASPHALT: BlockType = BlockTypes.register(
        new BlockType(
            new BlockSettings()
        ),
        "asphalt"
    );

    static initialiseClass() {
        this.DIRT.basicBlockState().setDefaultRenderer(new Identifier("frogger", "dirt"));
        this.GRASS.setDefaultState(new GrassBlockState(this.GRASS).setDefaultRenderer(new Identifier("frogger", "grass")));
        this.RED_FLOWER.basicBlockState().setDefaultRenderer(new Identifier("frogger", "red_flower"));
        this.ASPHALT.basicBlockState().setDefaultRenderer(new Identifier("frogger", "asphalt"));
    }

    static register(block: BlockType, name: string): BlockType {
        return Registry.register(Registries.BLOCK_TYPES, block, new Identifier("frogger", name));
    }
}
BlockTypes.initialiseClass();