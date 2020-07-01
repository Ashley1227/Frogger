import Vector2 from "../math/Vector2";
import World from "../world/World";
import Direction from "../math/Direction";

export default abstract class Entity {
    public world: World;

    public position: Vector2;
    public prevPos: Vector2;

    public direction: Direction;
    public prevDir: Direction;

    constructor(world: World, position: Vector2, direction: Direction) {
        this.world = world;

        this.position = position;
        this.prevPos = position;

        this.direction = direction;
        this.prevDir = direction;
    }
}