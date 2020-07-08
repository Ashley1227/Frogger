import Identifiable from "../../identifier/Identifiable";
import Identifier from "../../identifier/Identifier";
import EntitySettings from "./EntitySettings";
import Vector2 from "../../math/Vector2";
import EntityState from "../state/EntityState";
import World from "../../world/World";
import Direction from "../../math/Direction";
import BlockState from "../../block/state/BlockState";
import BasicEntityState from "../state/states/BasicEntityState";

export default abstract class EntityType implements Identifiable {
    public IDENTIFIER: Identifier;
    public SETTINGS: EntitySettings;

    private DEFAULT_STATE: EntityState;

    constructor(settings: EntitySettings) {
        this.SETTINGS = settings;
    }

    setDefaultState(state: EntityState): EntityState {
        this.DEFAULT_STATE = state;
        return this.DEFAULT_STATE;
    }
    basicEntityState(): EntityState {
        return this.setDefaultState(new BasicEntityState(this, new Vector2(0, 0), new Direction(0)));
    }

    createState(world: World, position: Vector2, direction: Direction): EntityState {
        let state: EntityState = this.DEFAULT_STATE.clone();

        state.setWorld(world);
        state.teleportTo(position);
        state.teleportLookTo(direction);
        return state;
    }
}