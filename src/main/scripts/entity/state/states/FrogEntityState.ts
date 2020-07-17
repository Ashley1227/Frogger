import EntityState from "../../../engine/entity/state/EntityState";
import Direction from "../../../engine/math/Direction";
import Sounds from "../../../../../client/scripts/Sounds";

export default class FrogEntityState extends EntityState {
    private hoppingTick = 0;

    public hopQueue: Direction[] = []

    tick(): void {
        super.tick();
        this.hop(this.hopQueue.shift());

        for (let entity of this.WORLD.entities) {
            if (entity != this && this.collidesWith(entity)) {
                this.onCollidesWith(entity);
            }
        }
    }

    onCollidesWith(other: EntityState): void {
        // console.log(other);
        // if(EntityTags.KILLS_PLAYER.has(other.TYPE))
            console.log("lol XD sklaks");
        Sounds.FROG_HIT_CAR.play();

    }

    hop(direction: Direction): void {
        if(!direction)
            return;
        if(this.WORLD.ticks - this.hoppingTick < 5) {
            this.hopQueue.push(direction);
        } else {
            this.lookTo(direction);
            this.hoppingTick = this.WORLD.ticks;
            this.moveTo(this.position.raycast(this.direction, 1));
            // Sounds.GRASS_STEP.play();
        }
    }

    isHopping(): boolean {
        return this.WORLD.ticks - this.hoppingTick < 4;
    }

    // getCollisionBoxSize(): Vector2 {
    //     return new Vector2(0.5, 0.5);
    // }

    clone(): EntityState {
        return new FrogEntityState(this.TYPE, this.WORLD, this.position, this.direction)
            .setDefaultRenderer(this.RENDERER)
    }
}