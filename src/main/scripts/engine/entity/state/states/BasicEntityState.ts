import EntityType from "../../type/EntityType";
import Vector2 from "../../../math/Vector2";
import EntityState from "../EntityState";
import Direction from "../../../math/Direction";

export default class BasicEntityState extends EntityState {
    constructor(type: EntityType, position: Vector2, direction: Direction) {
        super(type, position, direction);
    }

    clone(): EntityState {
        return new BasicEntityState(this.TYPE, this.position, this.direction)
            .setDefaultRenderer(this.RENDERER)
            .setWorld(this.WORLD);
    }
}