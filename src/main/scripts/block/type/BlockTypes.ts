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
import AsphaltBlockState from "../state/states/AsphaltBlockState";

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
    public static WATER: BlockType = BlockTypes.register(
        new BlockType(
            new BlockSettings()
        ),
        "water"
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
        this.DIRT.basicBlockState().setDefaultRenderer(Renderers.DIRT);
        this.WATER.basicBlockState().setDefaultRenderer(Renderers.WATER);
        this.GRASS.setDefaultState(new GrassBlockState(this.GRASS).setDefaultRenderer(Renderers.GRASS));
        this.RED_FLOWER.basicBlockState().setDefaultRenderer(Renderers.RED_FLOWER);
        this.ASPHALT.setDefaultState(new AsphaltBlockState(this.ASPHALT).setDefaultRenderer(Renderers.ASPHALT));
    }

    static register(block: BlockType, name: string): BlockType {
        return Registry.register(Registries.BLOCK_TYPES, block, new Identifier("frogger", name));
    }
}