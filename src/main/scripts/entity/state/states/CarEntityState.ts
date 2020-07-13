import EntityState from "../../../engine/entity/state/EntityState";
import Vector2 from "../../../engine/math/Vector2";

export default class CarEntityState extends EntityState {

    tick(): void {
        this.move(Vector2.RIGHT);
    }

    getCollisionBoxSize(): Vector2 {
        return new Vector2(2, 1);
    }

    clone(): EntityState {
        return new CarEntityState(this.TYPE, this.WORLD, this.position, this.direction).setDefaultRenderer(this.RENDERER);
    }
}