import EntityState from "../../../engine/entity/state/EntityState";
import Direction from "../../../engine/math/Direction";
import Sounds from "../../../../../client/scripts/Sounds";

export default class FrogEntityState extends EntityState {
    public hopping = false;
    private hoppingTick = 0;

    public hopQueue: Direction[] = []

    tick(): void {
        super.tick();
        if(this.hopping && this.WORLD.ticks - this.hoppingTick > 2) {
            this.unhop();
        }
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
        if(this.isHopping()) {
            this.hopQueue.push(direction);
        } else {
            this.lookTo(direction);
            this.hopping = true;
            this.hoppingTick = this.WORLD.ticks;
            this.moveTo(this.position.raycast(this.direction, 1));
        }
    }

    unhop(): void {
        this.hopping = false;
    }

    isHopping(): boolean {
        return this.hopping;
    }

    // getCollisionBoxSize(): Vector2 {
    //     return new Vector2(0.5, 0.5);
    // }

    clone(): EntityState {
        return new FrogEntityState(this.TYPE, this.WORLD, this.position, this.direction)
            .setDefaultRenderer(this.RENDERER)
    }
}