import Identifiable from "../../identifier/Identifiable";
import Identifier from "../../identifier/Identifier";
import EntitySettings from "./EntitySettings";
import Vector2 from "../../math/Vector2";
import EntityState from "../state/EntityState";
import World from "../../world/World";
import Direction from "../../math/Direction";
import BasicEntityState from "../state/states/BasicEntityState";

export default abstract class EntityType implements Identifiable {
    public IDENTIFIER: Identifier;
    public SETTINGS: EntitySettings;

    constructor(settings: EntitySettings) {
        this.SETTINGS = settings;
    }

    abstract createState(world: World, position: Vector2, direction: Direction): EntityState;
}