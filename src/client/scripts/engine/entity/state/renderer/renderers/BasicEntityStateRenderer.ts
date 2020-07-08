import Texture from "../../../../resources/texture/Texture";
import Vector2 from "../../../../../../../main/scripts/engine/math/Vector2";
import EntityStateRenderer from "../EntityStateRenderer";
import EntityState from "../../../../../../../main/scripts/engine/entity/state/EntityState";
import Direction from "../../../../../../../main/scripts/engine/math/Direction";
import World from "../../../../../../../main/scripts/engine/world/World";

export default class BasicEntityStateRenderer<T extends EntityState> extends EntityStateRenderer<T> {
    public TEXTURE: Texture;

    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    setTexture(texture: Texture): BasicEntityStateRenderer<T> {
        this.TEXTURE = texture;
        return this;
    }

    renderEntityState(size: Vector2, position: Vector2, state: T): void {
        let delta: number = (Date.now() - state.WORLD.lastTick) / World.TICK_INTERVAL;
        this.drawTexture(this.getTexture(state), Vector2.lerp(
            new Vector2(state.prevPos.x * size.x, state.prevPos.y * size.y),
            new Vector2(state.position.x * size.x, state.position.y * size.y),
            delta
            ), size.multiply(this.getTexture(state).inGameSize), Direction.lerp(state.prevDir, state.direction, delta)
        );
    }

    getTexture(state: T) {
        return this.TEXTURE;
    }
}