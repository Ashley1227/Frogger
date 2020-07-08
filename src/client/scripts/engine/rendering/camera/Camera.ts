import Vector2 from "../../../../../main/scripts/engine/math/Vector2";

export default class Camera {
    public position: Vector2;
    public scale: number;

    constructor(position: Vector2) {
        this.position = position;
    }
}