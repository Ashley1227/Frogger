import Vector2 from "../../../../main/scripts/engine/math/Vector2";
import Renderers from "../Renderers";
import TextRenderer from "../../engine/rendering/renderer/renderers/TextRenderer";
import {client} from "../../main";

export default class DebugOverlayRenderer extends TextRenderer {
    public fps: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
    }

    countFPS(fps: number) {
        super.countFPS(fps);
        this.fps = fps;
    }

    render(): void {
        super.render();
        this.finishRender();
    }

    renderOverlay(): void {
        if (this.shouldRender) {
            let size = 24;
            this.drawString(`${this.fps} FPS`, new Vector2(0, 1 * size), size, "white");
            this.drawString(`${Renderers.GAME_RENDERER.ms} ms frames (total)`, new Vector2(0, 2 * size), size, "white");
            this.drawString(`${Renderers.WORLD_RENDERER.ms} ms frames (world)`, new Vector2(0, 3 * size), size, "white");
            this.drawString(`${Renderers.CHUNK_RENDERER.ms} ms frames (chunks)`, new Vector2(0, 4 * size), size, "white");
            this.drawString(`${Renderers.DEBUG_OVERLAY_RENDERER.ms} ms frames (overlay)`, new Vector2(0, 5 * size), size, "white");

            this.drawString(`${client.world.tps} TPS (${client.world.ms} MSPT)`, new Vector2(0, 7 * size), size, "white");
            this.drawString(`${client.world.chunks.map.size} chunks loaded`, new Vector2(0, 8 * size), size, "white");
            this.drawString(`${client.world.entities.length} entities`, new Vector2(0, 9 * size), size, "white");

            this.drawString(`X: ${client.camera.getPosition().x.toFixed(6)} (camera)`, new Vector2(0, 11 * size), size, "white");
            this.drawString(`Y: ${client.camera.getPosition().y.toFixed(6)} (camera)`, new Vector2(0, 12 * size), size, "white");
        }
    }
}