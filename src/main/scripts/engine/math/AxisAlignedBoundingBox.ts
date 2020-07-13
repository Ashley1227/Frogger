import BoundingBox from "./BoundingBox";
import Vector2 from "./Vector2";

export default class AxisAlignedBoundingBox extends BoundingBox {
    public position: Vector2;
    public size: Vector2;

    public constructor(position: Vector2, size: Vector2) {
        super();
        this.position = position;
        this.size = size;
    }

    /**
     * A    B
     *
     * C    D
     */
    public getPoints(): Vector2[] {
        return [this.position,                                     this.position.add(new Vector2(this.size.x, 0)),
                this.position.add(new Vector2(0, this.size.y)), this.position.add(this.size)];
    }

    public intersects(other: BoundingBox): boolean {
        let [a1, b1,
             c1, d1] = this.getPoints();

        let [a2, b2,
             c2, d2] = other.getPoints();

        // return (a1.x < b2.x &&
        //     b1.x > a2.x &&
        //     c1.y < d2.y &&
        //     d1.y > c2.y);

        // a1.x = a1.x
        // a1.y = a1.y
        // b1.x = b1.x
        // c1.y = c1.y

        // a2.x = a2.x
        // a2.y = a2.y
        // b2.x = b2.x
        // c2.y = c2.y
        
        return (a1.x < b2.x &&
            b1.x > a2.x &&
            a1.y < c2.y &&
            c1.y > a2.y)

        // a1.x < b2.x &&
        // b1.x > a2.x &&
        // a1.y < c2.y &&
        // c1.y > a2.y
    }

    public clone(): AxisAlignedBoundingBox {
        return new AxisAlignedBoundingBox(this.position, this.size);
    }
}