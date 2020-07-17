import EntityState from "../../../engine/entity/state/EntityState";
import Vector2 from "../../../engine/math/Vector2";
import {frog} from "../../../server";
import {abs} from "../../../engine/math/math";

export default class CarEntityState extends EntityState {

    tick(): void {
        this.move(Vector2.RIGHT.multiply(new Vector2(0.5, 0.5)));

        if(abs(this.position.taxicabDistance(frog.position)) > 64)
            this.remove();
    }

    getCollisionBoxSize(): Vector2 {
        return new Vector2(1, 1);
    }

    clone(): EntityState {
        return new CarEntityState(this.TYPE, this.WORLD, this.position, this.direction).setDefaultRenderer(this.RENDERER);
    }
}