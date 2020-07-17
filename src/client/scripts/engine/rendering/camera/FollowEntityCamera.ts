import Camera from "./Camera";
import Vector2 from "../../../../../main/scripts/engine/math/Vector2";
import EntityState from "../../../../../main/scripts/engine/entity/state/EntityState";
import {client} from "../../../client";

export default class FollowEntityCamera extends Camera {
    public entity: EntityState;

    private delta: number;

    constructor(entity: EntityState) {
        super(entity.position);

        this.entity = entity;
    }

    render(canvas: HTMLCanvasElement): void {
        super.render(canvas);
        this.delta = (Date.now() - this.entity.WORLD.lastTick) / client.world.settings.TICK_INTERVAL;
    }

    getPosition(): Vector2 {
        return Vector2.lerp(this.entity.prevPos, this.entity.position, this.delta).subtract(this.viewort.divide(new  Vector2(2, 2)));
    }

}