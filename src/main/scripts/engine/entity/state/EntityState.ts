import Vector2 from "../../math/Vector2";
import World from "../../world/World";
import Direction from "../../math/Direction";
import EntityType from "../type/EntityType";
import Identifier from "../../identifier/Identifier";

export default abstract class EntityState {
    public TYPE: EntityType;
    public WORLD: World;
    public RENDERER: Identifier;

    public position: Vector2;
    public prevPos: Vector2;

    public direction: Direction;
    public prevDir: Direction;

    constructor(type: EntityType, position: Vector2, direction: Direction) {
        this.TYPE = type;

        this.teleportTo(position);

        this.teleportLookTo(direction);
    }

    abstract clone(): EntityState;

    moveTo(position: Vector2): EntityState {
        this.prevPos = this.position;
        this.position = position;
        return this;
    }
    teleportTo(position: Vector2): EntityState {
        this.prevPos = position;
        this.position = position;
        return this;
    }

    lookTo(direction: Direction): EntityState {
        this.prevDir = this.direction;
        this.direction = direction;
        return this;
    }
    teleportLookTo(direction: Direction): EntityState {
        this.prevDir = direction;
        this.direction = direction;
        return this;
    }
    turn(direction: Direction): EntityState {
        this.lookTo(this.direction.add(direction));
        return this;
    }

    setWorld(world: World): EntityState {
        this.WORLD = world;
        return this;
    }

    tick(): void {
        this.prevPos = this.position;
        this.prevDir = this.direction;
    }

    setDefaultRenderer(renderer: Identifier): EntityState {
        this.RENDERER = renderer;
        return this;
    }

    getRenderer(position: Vector2): Identifier {
        return this.RENDERER;
    }
}