import Registries from "../../engine/registry/Registries";
import Registry from "../../engine/registry/Registry";
import Identifier from "../../engine/identifier/Identifier";
import BlockTag from "../../engine/tag/tags/BlockTag";

console.debug("");
console.debug("Block Tags");
console.debug("==========");
export default class BlockTags {

    static initialiseClass() {
    }

    static register(tag: BlockTag, name: string): BlockTag {
        return Registry.register(Registries.TAGS, tag, new Identifier("frogger", name));
    }
}
BlockTags.initialiseClass();