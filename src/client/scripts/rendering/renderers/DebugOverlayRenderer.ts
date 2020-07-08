import CanvasRenderer from "../../engine/rendering/renderer/renderers/CanvasRenderer";
import WorldRenderer from "./WorldRenderer";
import FroggerClient from "../../FroggerClient";
import Controls from "../../input/Controls";
import ClientRegistries from "../../engine/registry/ClientRegistries";
import Vector2 from "../../../../main/scripts/engine/math/Vector2";
import Renderers from "../Renderers";
import TextRenderer from "../../engine/rendering/renderer/renderers/TextRenderer";
import {CLIENT} from "../../main";

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

            this.drawString(`${CLIENT.world.tps} TPS (${CLIENT.world.ms} MSPT)`, new Vector2(0, 7 * size), size, "white");
        }
    }
}