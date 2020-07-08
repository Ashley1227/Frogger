import EntityType from "../../engine/entity/type/EntityType";
import Identifier from "../../engine/identifier/Identifier";
import Registries from "../../engine/registry/Registries";
import Registry from "../../engine/registry/Registry";
import EntitySettings from "../../engine/entity/type/EntitySettings";
import FrogEntityType from "./types/FrogEntityType";
import FrogEntityState from "../state/states/FrogEntityState";
import Vector2 from "../../engine/math/Vector2";
import Direction from "../../engine/math/Direction";

console.debug("");
console.debug("Entity Types");
console.debug("==========");
export default class EntityTypes {

    public static FROG: FrogEntityType = EntityTypes.register(new FrogEntityType(new EntitySettings()), "frog");

    static initializeClass() {
        this.FROG.setDefaultState(new FrogEntityState(this.FROG, new Vector2(0, 0), new Direction(0)))
            .setDefaultRenderer(new Identifier("frogger", "frog"));
    }

    static register<T extends EntityType>(type: T, name: string): T {
        return <T>Registry.register(Registries.ENTITY_TYPES, type, new Identifier("frogger", name));
    }
}
EntityTypes.initializeClass();