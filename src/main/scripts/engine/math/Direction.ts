import Dirtyable from "../interfaces/Dirtyable";
import {lerp} from "./math";
import Vector2 from "./Vector2";

export default class Direction implements Dirtyable{
    public yaw: number;

    private dirty: boolean;

    private x: number;
    private y: number;

    constructor(yaw: number) {
        this.markDirty();
        this.yaw = yaw;

        this.x = this.getX();
        this.y = this.getX();
    }

    add(amt: Direction | number): Direction {
        return new Direction(this.yaw + ((amt instanceof Direction) ? amt.yaw : amt));
    }
    static add(a: Direction, b: Direction | number): Direction {
        return a.add(b);
    }

    turn(amt: Direction | number): Direction {
        this.yaw += (amt instanceof Direction) ? amt.yaw : amt;
        return this;
    }

    static lerp(a: Direction, b: Direction, by: number): Direction {
        let ret: Direction = new Direction(lerp(a.yaw, b.yaw, by));
        return ret;
    }

    markDirty(): void {
        this.dirty = true;
    }
    isDirty(): boolean {
        return this.dirty
    }
    getX(): number {
        return -Math.sin(this.yaw);
    }
    getY(): number {
        return -Math.cos(this.yaw);
    }
}