import PixelatedCanvasRenderer from "../../engine/rendering/renderer/renderers/PixelatedCanvasRenderer";
import Keys from "../../engine/input/keyboard/Keys";
import World from "../../../../main/scripts/engine/world/World";
import ChunkRenderer from "./ChunkRenderer";
import Renderers from "../Renderers";
import BlockStateRenderer from "../../engine/block/state/renderer/BlockStateRenderer";
import ClientRegistries from "../../engine/registry/ClientRegistries";
import Vector2 from "../../../../main/scripts/engine/math/Vector2";
import EntityStateRenderer from "../../engine/entity/state/renderer/EntityStateRenderer";
import EntityState from "../../../../main/scripts/engine/entity/state/EntityState";

export default class WorldRenderer extends PixelatedCanvasRenderer {
    private CHUNK_RENDERER: ChunkRenderer;

    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    initialise() {
        super.initialise();
        this.CHUNK_RENDERER = <ChunkRenderer>this.addChild(Renderers.CHUNK_RENDERER);
        return this;
    }

    render(): void {
        super.render();
        if(Keys.W.isDown()) {
            this.move(new Vector2(0, 10));
        }
        if(Keys.S.isDown()) {
            this.move(new Vector2(0, -10));
        }
        if(Keys.A.isDown()) {
            this.move(new Vector2(10, 0));
        }
        if(Keys.D.isDown()) {
            this.move(new Vector2(-10, 0));
        }
    }
    renderWorld(world: World): void {
        let size = new Vector2(64, 64);
        for(let chunk of world.chunks.values()) {
            this.CHUNK_RENDERER.renderChunk(chunk);
        }
        for(let entityState of world.entities) {
            (<EntityStateRenderer<EntityState>>ClientRegistries.RENDERERS.get(entityState.RENDERER)).renderEntityState(
                size, entityState.position, entityState
            );
        }
        this.finishRender();
    }
}