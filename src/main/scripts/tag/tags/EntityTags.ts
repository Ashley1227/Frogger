import Registries from "../../engine/registry/Registries";
import Registry from "../../engine/registry/Registry";
import Identifier from "../../engine/identifier/Identifier";
import EntityTag from "../../engine/tag/tags/EntityTag";
import EntityTypes from "../../entity/type/EntityTypes";

console.debug("");
console.debug("Entity Tags");
console.debug("==========");
export default class EntityTags {
    public static CARS = EntityTags.register(new EntityTag().addItem(EntityTypes.GRAY_CAR), "cars");

    public static KILLS_PLAYER = EntityTags.register(new EntityTag().addTag(EntityTags.CARS), "kills_player");

    static initialiseClass() {
    }

    static register(tag: EntityTag, name: string): EntityTag {
        return Registry.register(Registries.TAGS, tag, new Identifier("frogger", name));
    }
}
EntityTags.initialiseClass();