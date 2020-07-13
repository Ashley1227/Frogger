import EntityType from "../../../engine/entity/type/EntityType";
import Vector2 from "../../../engine/math/Vector2";
import EntityState from "../../../engine/entity/state/EntityState";
import FrogEntityState from "../../state/states/FrogEntityState";
import World from "../../../engine/world/World";
import Direction from "../../../engine/math/Direction";
import Identifier from "../../../engine/identifier/Identifier";

export default class FrogEntityType extends EntityType {
    createState(world: World, position: Vector2, direction: Direction): EntityState {
        return new FrogEntityState(this, world, position, direction).setDefaultRenderer(new Identifier("frogger", "frog"));
    }
}