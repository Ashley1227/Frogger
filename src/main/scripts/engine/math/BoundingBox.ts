import Vector2 from "./Vector2";

export default abstract class BoundingBox {
    /**
     * A    B
     *
     * C    D
     */
    public abstract getPoints(): Vector2[];

    public abstract intersects(other: BoundingBox): boolean;
    public static intersects(a: BoundingBox, b: BoundingBox): boolean {
        return a.intersects(b);
    }

    public abstract clone(): BoundingBox;
}