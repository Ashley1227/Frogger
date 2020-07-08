import Direction from "./Direction";
import Hashable from "../interfaces/Hashable";
import {lerp} from "./math";

export default class Vector2 implements Hashable {
    public x: number;
    public y: number;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    raycast(direction: Direction, amount: number): Vector2 {
        return new Vector2(this.x + direction.getX() * amount, this.y + direction.getY() * amount);
    }

    add(other: Vector2): Vector2 {
        return new Vector2(this.x + other.x, this.y + other.y);
    }
    static add(a: Vector2, b: Vector2): Vector2 {
        return a.add(b);
    }

    subtract(other: Vector2): Vector2 {
        return new Vector2(this.x - other.x, this.y - other.y);
    }
    static subtract(a: Vector2, b: Vector2): Vector2 {
        return a.subtract(b);
    }

    multiply(other: Vector2): Vector2 {
        return new Vector2(this.x * other.x, this.y * other.y);
    }
    static multiply(a: Vector2, b: Vector2): Vector2 {
        return a.multiply(b);
    }

    divide(other: Vector2): Vector2 {
        return new Vector2(this.x / other.x, this.y / other.y);
    }
    static divide(a: Vector2, b: Vector2): Vector2 {
        return a.divide(b);
    }

    inverse(): Vector2 {
        return new Vector2(-this.x, -this.y);
    }

    abs(): Vector2 {
        return new Vector2(Math.abs(this.x), Math.abs(this.y));
    }

    toString(): string {
        return `Vector2(${this.x},${this.y})`;
    }

    static lerp(a: Vector2, b: Vector2, by: number): Vector2 {
        let retX = lerp(a.x, b.x, by);
        let retY = lerp(a.y, b.y, by);
        return new Vector2(retX, retY);
    }

    getHashCode(): string {
        return this.toString();
    }

}