import Texture from "../../../../resources/texture/Texture";
import Vector2 from "../../../../../../../main/scripts/engine/math/Vector2";
import EntityStateRenderer from "../EntityStateRenderer";
import EntityState from "../../../../../../../main/scripts/engine/entity/state/EntityState";
import Direction from "../../../../../../../main/scripts/engine/math/Direction";
import World from "../../../../../../../main/scripts/engine/world/World";
import Textures from "../../../../../Textures";

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
        // let delta: number = (Date.now() - state.WORLD.lastTick) / World.TICK_INTERVAL;
        // this.drawTexture(this.getTexture(state), Vector2.lerp(
        //     state.prevPos.add(CLIENT.camera.position).multiply(size),
        //     state.position.add(CLIENT.camera.position).multiply(size),
        //     delta
        //     ), size.multiply(this.getTexture(state).inGameSize), Direction.lerp(state.prevDir, state.direction, delta)
        // );
        let delta: number = (Date.now() - state.WORLD.lastTick) / World.TICK_INTERVAL;
        // this.drawTexture(
        //     Textures.STREAKY_DIRT, Vector2.lerp(
        //     state.prevPos,
        //     state.position,
        //     delta
        //     ), this.getTexture(state).inGameSize
        // );
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