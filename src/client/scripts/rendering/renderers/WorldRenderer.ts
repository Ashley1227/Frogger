import World from "../../../../main/scripts/engine/world/World";
import ChunkRenderer from "./ChunkRenderer";
import Renderers from "../Renderers";
import ClientRegistries from "../../engine/registry/ClientRegistries";
import Vector2 from "../../../../main/scripts/engine/math/Vector2";
import EntityStateRenderer from "../../engine/entity/state/renderer/EntityStateRenderer";
import EntityState from "../../../../main/scripts/engine/entity/state/EntityState";
import CameraCanvasRenderer from "../../engine/rendering/renderer/renderers/CameraCanvasRenderer";

export default class WorldRenderer extends CameraCanvasRenderer {
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
    }
    renderWorld(world: World): void {
        let size = new Vector2(64, 64);
        for(let chunk of world.chunks.values()) {
            this.CHUNK_RENDERER.renderChunk(chunk);
        }
        for(let entityState of world.entities) {
            (<EntityStateRenderer<EntityState>>ClientRegistries.RENDERERS.get(entityState.RENDERER)).renderEntityState(
                entityState.position, entityState
            );
        }
        this.finishRender();
    }
}