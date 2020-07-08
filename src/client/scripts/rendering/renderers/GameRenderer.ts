import PixelatedCanvasRenderer from "../../engine/rendering/renderer/renderers/PixelatedCanvasRenderer";
import ClientRegistries from "../../engine/registry/ClientRegistries";
import Renderers from "../Renderers";
import WorldRenderer from "./WorldRenderer";
import DebugOverlayRenderer from "./DebugOverlayRenderer";
import {CLIENT} from "../../main";
import Controls from "../../input/Controls";

export default class GameRenderer extends PixelatedCanvasRenderer {
    private WORLD_RENDERER: WorldRenderer;
    private DEBUG_OVERLAY_RENDERER: DebugOverlayRenderer;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
    }

    initialise() {
        super.initialise();

        this.canvas.parentElement.onresize = () => {
            this.onResize();
        };

        this.WORLD_RENDERER = <WorldRenderer>this.addChild(Renderers.WORLD_RENDERER);
        this.DEBUG_OVERLAY_RENDERER = <DebugOverlayRenderer>this.addChild(Renderers.DEBUG_OVERLAY_RENDERER);

        this.onResize();
        return this;
    }
    onResize() {
        for(let renderer of ClientRegistries.RENDERERS) {
            if(renderer != this)
                renderer.onResize();
        }
    }

    render(): void {
        super.render();
        if(Controls.DEBUG_TOGGLE.isPressed()) {
            this.DEBUG_OVERLAY_RENDERER.shouldRender = !this.DEBUG_OVERLAY_RENDERER.shouldRender;
        }
        this.WORLD_RENDERER.renderWorld(CLIENT.world);
        this.DEBUG_OVERLAY_RENDERER.renderOverlay();
        for(let control of ClientRegistries.KEYBOARD_CONTROLS) {
            control.isDown();
        }

        this.finishRender();
    }
}