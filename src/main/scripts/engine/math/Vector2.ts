import Direction from "./Direction";
import Hashable from "../interfaces/Hashable";
import {lerp, sqrt, square} from "./math";

export default class Vector2 implements Hashable {
    public static readonly ZERO: Vector2 = new Vector2(0, 0);
    public static readonly ONE: Vector2 = new Vector2(1, 1);
    public static readonly TWO: Vector2 = new Vector2(2, 2);

    public static readonly UP: Vector2 = new Vector2(0, -1);
    public static readonly DOWN: Vector2 = new Vector2(0, 1);
    public static readonly LEFT: Vector2 = new Vector2(-1, 0);
    public static readonly RIGHT: Vector2 = new Vector2(1, 0);

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
    static inverse(a: Vector2): Vector2 {
        return a.inverse();
    }

    abs(): Vector2 {
        return new Vector2(Math.abs(this.x), Math.abs(this.y));
    }
    static abs(a: Vector2): Vector2 {
        return a.abs();
    }

    floor(): Vector2 {
        return new Vector2(Math.floor(this.x), Math.floor(this.y));
    }
    static floor(a: Vector2): Vector2 {
        return a.floor();
    }

    round(): Vector2 {
        return new Vector2(Math.round(this.x), Math.round(this.y));
    }
    static round(a: Vector2): Vector2 {
        return a.round();
    }

    decrement(): Vector2 {
        return this.subtract(Vector2.ONE);
    }
    static decrement(a: Vector2): Vector2 {
        return a.decrement();
    }

    increment(): Vector2 {
        return this.add(Vector2.ONE);
    }
    static increment(a: Vector2): Vector2 {
        return a.increment();
    }

    distanceX(other: Vector2): number {
        return this.x - other.x;
    }
    static distanceX(a: Vector2, b: Vector2): number {
        return a.distanceX(b);
    }

    distanceY(other: Vector2): number {
        return this.y - other.y;
    }
    static distanceY(a: Vector2, b: Vector2): number {
        return a.distanceY(b);
    }

    taxicabDistance(other: Vector2): number {
        return this.distanceX(other) + this.distanceY(other);
    }
    static taxicabDistance(a: Vector2, b: Vector2): number {
        return a.taxicabDistance(b);
    }

    euclideanDistance(other: Vector2): number {
        return sqrt(square(this.x - other.x) + square(this.y - other.y));
    }
    static euclideanDistance(a: Vector2, b: Vector2): number {
        return a.euclideanDistance(b);
    }

    ceil(): Vector2 {
        return new Vector2(Math.ceil(this.x), Math.ceil(this.y));
    }
    static ceil(a: Vector2): Vector2 {
        return a.ceil();
    }

    static lerp(a: Vector2, b: Vector2, by: number): Vector2 {
        let retX = lerp(a.x, b.x, by);
        let retY = lerp(a.y, b.y, by);
        return new Vector2(retX, retY);
    }

    equals(other: Vector2): boolean {
        return this.x === other.x && this.y === other.y;
    }

    up(): Vector2 {
        return this.add(Vector2.UP);
    }
    down(): Vector2 {
        return this.add(Vector2.DOWN);
    }
    left(): Vector2 {
        return this.add(Vector2.LEFT);
    }
    right(): Vector2 {
        return this.add(Vector2.RIGHT);
    }

    toString(): string {
        return `(${this.x},${this.y})`;
    }

    getHashCode(): string {
        return this.toString();
    }
}