import Texture from "../../../../resources/texture/Texture";
import Vector2 from "../../../../../../../main/scripts/engine/math/Vector2";
import EntityStateRenderer from "../EntityStateRenderer";
import EntityState from "../../../../../../../main/scripts/engine/entity/state/EntityState";
import Direction from "../../../../../../../main/scripts/engine/math/Direction";
import World from "../../../../../../../main/scripts/engine/world/World";
import Textures from "../../../../../Textures";
import Renderers from "../../../../../rendering/Renderers";

export default class BasicEntityStateRenderer<T extends EntityState> extends EntityStateRenderer<T> {
    public TEXTURE: Texture;

    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    setTexture(texture: Texture): BasicEntityStateRenderer<T> {
        this.TEXTURE = texture;
        return this;
    }

    renderEntityState(position: Vector2, state: T): void {
        let delta: number = (Date.now() - state.WORLD.lastTick) / state.WORLD.settings.TICK_INTERVAL;
        if(Renderers.DEBUG_OVERLAY_RENDERER.shouldRender) {
            let box = state.getCollisionBox();
            this.drawRect(box.position, box.size, "orange");
            // console.log("should render owo");
        }
        this.drawTexture(this.getTexture(state), Vector2.lerp(
            state.prevPos,
            state.position,
            delta
            ), this.getTexture(state).inGameSize, Direction.lerp(state.prevDir, state.direction, delta)
        );
    }

    getTexture(state: T) {
        return this.TEXTURE;
    }
}