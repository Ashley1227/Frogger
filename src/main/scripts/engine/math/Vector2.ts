import Direction from "./Direction";

export default class Vector2 {
    public x: number;
    public y: number;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    raycast(direction: Direction, amount: number): Vector2 {
        return new Vector2(this.x + direction.getX() * amount, this.y + direction.getY() * amount);
    }
}