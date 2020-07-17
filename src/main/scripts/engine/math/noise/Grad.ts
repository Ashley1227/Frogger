/**
 * Credit to vincismurf on the Unity forums for the original class
 * https://forum.unity.com/threads/free-perlin-noise-in-typescript.600121/
 *
 * what even is a grad lol
 */
export default class Grad {
    public x: number;
    public y: number;
    public z: number;

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    dot2(x, y) {
        return this.x * x + this.y * y;
    };

    dot3 = function (x, y, z) {
        return this.x * x + this.y * y + this.z * z;
    };
}