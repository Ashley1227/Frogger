import Random from "./Random";

let random: Random = new Random();

export var PI = Math.PI;
export var TAU = PI * 2;

export function lerp(a: number, b: number, by: number) {
    return a * (1 - by) + b * by;
}

export function sqrt(a: number): number {
    return Math.sqrt(a);
}
export function square(a: number): number {
    return a * a;
}

export function abs(a: number): number {
    return Math.abs(a);
}
export function floor(a: number): number {
    return Math.floor(a);
}
export function round(a: number): number {
    return Math.round(a);
}
export function ceil(a: number): number {
    return Math.ceil(a);
}