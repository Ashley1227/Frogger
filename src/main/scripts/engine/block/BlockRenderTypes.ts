import Registries from "../../engine/registry/Registries";
import Registry from "../../engine/registry/Registry";
import Identifier from "../../engine/identifier/Identifier";
import BlockRenderType from "./BlockRenderType";

console.debug("");
console.debug("Block Render Types");
console.debug("==========");
export default class BlockRenderTypes {
    static BASIC: BlockRenderType = BlockRenderTypes.register(new BlockRenderType(), "basic");
    static ADVANCED: BlockRenderType = BlockRenderTypes.register(new BlockRenderType(), "advanced");

    static register(renderType: BlockRenderType, name: string): BlockRenderType {
        return Registry.register(Registries.BLOCK_RENDER_TYPES, renderType, new Identifier("frogger", name));
    }
}