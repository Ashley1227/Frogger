import EntityState from "../../../engine/entity/state/EntityState";
import EntityType from "../../../engine/entity/type/EntityType";
import Vector2 from "../../../engine/math/Vector2";
import Direction from "../../../engine/math/Direction";
import Random from "../../../engine/math/Random";
import {PI, TAU} from "../../../engine/math/math";

export default class FrogEntityState extends EntityState {
    public hopping = false;
    private hoppingTick = 0;

    constructor(type: EntityType, position: Vector2, direction: Direction) {
        super(type, position, direction);
    }

    tick(): void {
        super.tick();
        if(this.hopping && this.WORLD.ticks - this.hoppingTick > 3) {
            this.unhop();
        } else if(Random.nextFloat() > 0.95) {
            this.hop();
        } else if(Random.nextFloat() > 0.99) {
            this.turn(new Direction(Random.nextFloatInRange(-PI/2, PI/2)));
        }
        // console.log(TAU);

    }

    hop(): void {
        this.hopping = true;
        this.hoppingTick = this.WORLD.ticks;
        this.moveTo(this.position.raycast(this.direction, 1));
    }

    unhop(): void {
        this.hopping = false;
    }

    clone(): EntityState {
        return new FrogEntityState(this.TYPE, this.position, this.direction)
            .setDefaultRenderer(this.RENDERER)
            .setWorld(this.WORLD);
    }
}