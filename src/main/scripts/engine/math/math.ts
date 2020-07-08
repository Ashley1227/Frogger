import Random from "./Random";

let random: Random = new Random();

export var PI = Math.PI;
export var TAU = PI * 2;

export function lerp(a: number, b: number, by: number) {
    return a * (1 - by) + b * by;
}