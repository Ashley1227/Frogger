/**
 * Modified from orip on https://stackoverflow.com/questions/424292/seedable-javascript-random-number-generator
 */
import Vector2 from "./Vector2";

export default class Random {
    private static INSTANCE: Random = new Random();

    public m: number;
    public a: number;
    public c: number;

    public state: number;

    private originalState: number;

    constructor(seed?: number) {
        // LCG using GCC's constants
        this.m = 0x80000000; // 2**31;
        this.a = 1103515245;
        this.c = 12345;

        this.state = seed ? seed : this.generateRandomState();
        this.originalState = this.state;
    }

    generateRandomState(): number {
        return Math.floor(Math.random() * (this.m - 1));
    }
    static generateRandomState(): number {
        return this.INSTANCE.generateRandomState();
    }

    reset(): Random {
        this.state = this.originalState;
        return this;
    }
    static reset(): Random {
        return Random.reset()
    }

    nextInt(): number {
        this.state = (this.a * this.state + this.c) % this.m;
        return this.state;
    }
    static nextInt(): number {
        return Random.nextInt();
    }

    nextFloat(): number {
        return this.nextInt() / (this.m - 1);
    }
    static nextFloat(): number {
        return Random.INSTANCE.nextFloat();
    }


    nextIntInRange(start: number, end: number): number {
        let rangeSize: number = end - start;
        let randomUnder1: number = this.nextInt() / this.m;
        return start + Math.floor(randomUnder1 * rangeSize);
    }
    static nextIntInRange(start: number, end: number): number {
        return Random.INSTANCE.nextIntInRange(start, end);
    }

    nextFloatInRange(start: number, end: number): number {
        let rangeSize: number = end - start;
        let randomUnder1: number = this.nextFloat();
        return start + randomUnder1 * rangeSize;
    }
    static nextFloatInRange(start: number, end: number): number {
        return Random.INSTANCE.nextFloatInRange(start, end);
    }

    nextIntVector2InRange(start: Vector2, end: Vector2): Vector2 {
        return new Vector2(this.nextIntInRange(start.x, end.x), this.nextIntInRange(start.y, end.y));
    }
    static nextIntVector2InRange(start: Vector2, end: Vector2): Vector2 {
        return this.INSTANCE.nextIntVector2InRange(start, end);
    }

    nextFloatVector2InRange(start: Vector2, end: Vector2): Vector2 {
        return new Vector2(this.nextFloatInRange(start.x, end.x), this.nextFloatInRange(start.y, end.y));
    }
    static nextFloatVector2InRange(start: Vector2, end: Vector2): Vector2 {
        return this.INSTANCE.nextFloatVector2InRange(start, end);
    }

    choice(array: any[]): any {
        return array[this.nextIntInRange(0, array.length)];
    }
    static choice(array: any[]): any {
        return Random.INSTANCE.choice(array);
    }
}