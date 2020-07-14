import Vector2 from "../../math/Vector2";
import World from "../../world/World";
import Direction from "../../math/Direction";
import EntityType from "../type/EntityType";
import Identifier from "../../identifier/Identifier";
import EntityBehavior from "../behavior/EntityBehavior";
import AxisAlignedBoundingBox from "../../math/AxisAlignedBoundingBox";
import BoundingBox from "../../math/BoundingBox";
import EntityStateRenderer from "../../../../../client/scripts/engine/entity/state/renderer/EntityStateRenderer";

export default abstract class EntityState {
    public TYPE: EntityType;
    public WORLD: World;
    public RENDERER: EntityStateRenderer<this>;

    public position: Vector2;
    public prevPos: Vector2;

    public direction: Direction;
    public prevDir: Direction;

    public behaviors: EntityBehavior<this>[];

    public constructor(type: EntityType, world: World,  position: Vector2, direction: Direction) {
        this.TYPE = type;
        this.WORLD = world;

        this.teleportTo(position);
        this.teleportLookTo(direction);

        this.behaviors = [];
    }

    public abstract clone(): EntityState;

    public moveTo(position: Vector2): EntityState {
        this.prevPos = this.position;
        this.position = position;
        return this;
    }
    public move(vector2: Vector2): EntityState {
        this.moveTo(this.position.add(vector2));
        return this;
    }
    public teleportTo(position: Vector2): EntityState {
        this.prevPos = position;
        this.position = position;
        return this;
    }

    public lookTo(direction: Direction): EntityState {
        this.prevDir = this.direction;
        this.direction = direction;
        return this;
    }
    public teleportLookTo(direction: Direction): EntityState {
        this.prevDir = direction;
        this.direction = direction;
        return this;
    }
    public turn(direction: Direction): EntityState {
        this.lookTo(this.direction.add(direction));
        return this;
    }

    public setWorld(world: World): EntityState {
        this.WORLD = world;
        return this;
    }

    public setBehaviors(behaviors: EntityBehavior<this>[]): EntityState {
        this.behaviors = behaviors;
        return this;
    }
    public addBehaviors(...behaviors: EntityBehavior<this>[]): EntityState {
        return this.setBehaviors(this.behaviors.concat(behaviors));
    }

    public tick(): void {
        this.prevPos = this.position;
        this.prevDir = this.direction;
        for(let b of this.behaviors) {
            b.tick(this);
        }
    }

    public setDefaultRenderer(renderer: EntityStateRenderer<this>): EntityState {
        this.RENDERER = renderer;
        return this;
    }

    public getRenderer(): EntityStateRenderer<this> {
        return this.RENDERER;
    }

    public collidesWith(other: EntityState): boolean {
        return this.getCollisionBox().intersects(other.getCollisionBox());
    }

    public getCollisionBox(): BoundingBox {
        return new AxisAlignedBoundingBox(this.position, this.getCollisionBoxSize());
    }
    public getCollisionBoxSize(): Vector2 {
        return Vector2.ONE;
    }
}