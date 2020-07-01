import Dirtyable from "../interfaces/Dirtyable";

export default class Direction implements Dirtyable{
    private dirty: boolean;
    private yaw: number;

    private x: number;
    private y: number;

    constructor(yaw: number) {
        this.markDirty();
        this.yaw = yaw;

        this.x = this.getX();
        this.y = this.getX();
    }

    markDirty(): void {
        this.dirty = true;
    }
    isDirty(): boolean {
        return this.dirty
    }
    getX(): number {
        return Math.sin(this.yaw);
    }
    getY(): number {
        return Math.cos(this.yaw);
    }
}