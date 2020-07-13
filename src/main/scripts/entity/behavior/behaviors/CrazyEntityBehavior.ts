import EntityBehavior from "../../../engine/entity/behavior/EntityBehavior";
import FrogEntityState from "../../state/states/FrogEntityState";
import Random from "../../../engine/math/Random";

export default class CrazyEntityBehavior extends EntityBehavior<FrogEntityState> {
    tick(state: FrogEntityState): void {
        state.lookTo(state.direction.add(Random.nextFloatInRange(-0.05, 0.1)));
        state.moveTo(state.position.raycast(state.direction, Random.nextFloatInRange(-0.1, 1)));
    }
}