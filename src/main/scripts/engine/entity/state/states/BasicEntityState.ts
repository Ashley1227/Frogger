import EntityType from "../../type/EntityType";
import Vector2 from "../../../math/Vector2";
import EntityState from "../EntityState";
import Direction from "../../../math/Direction";
import World from "../../../world/World";

export default class BasicEntityState extends EntityState {
    constructor(type: EntityType, world: World, position: Vector2, direction: Direction) {
        super(type, world, position, direction);
    }

    clone(): EntityState {
        return new BasicEntityState(this.TYPE, this.WORLD, this.position, this.direction)
            .setDefaultRenderer(this.RENDERER)
    }
}