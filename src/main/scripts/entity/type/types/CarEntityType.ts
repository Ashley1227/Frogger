import EntityType from "../../../engine/entity/type/EntityType";
import Vector2 from "../../../engine/math/Vector2";
import EntityState from "../../../engine/entity/state/EntityState";
import World from "../../../engine/world/World";
import Direction from "../../../engine/math/Direction";
import CarEntityState from "../../state/states/CarEntityState";
import Renderers from "../../../../../client/scripts/rendering/Renderers";

export default class CarEntityType extends EntityType {
    createState(world: World, position: Vector2, direction: Direction): EntityState {
        return new CarEntityState(this, world, position, direction).setDefaultRenderer(Renderers.GRAY_CAR);
    }
}