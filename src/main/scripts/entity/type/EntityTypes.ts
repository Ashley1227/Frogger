import EntityType from "../../engine/entity/type/EntityType";
import Identifier from "../../engine/identifier/Identifier";
import Registries from "../../engine/registry/Registries";
import Registry from "../../engine/registry/Registry";
import EntitySettings from "../../engine/entity/type/EntitySettings";
import FrogEntityType from "./types/FrogEntityType";
import CarEntityType from "./types/CarEntityType";

console.debug("");
console.debug("Entity Types");
console.debug("==========");
export default class EntityTypes {

    public static FROG: FrogEntityType = EntityTypes.register(new FrogEntityType(new EntitySettings()), "frog");

    public static GRAY_CAR: FrogEntityType = EntityTypes.register(new CarEntityType(new EntitySettings()), "gray_car");

    static initialiseClass() {
    }

    static register<T extends EntityType>(type: T, name: string): T {
        return <T>Registry.register(Registries.ENTITY_TYPES, type, new Identifier("frogger", name));
    }
}