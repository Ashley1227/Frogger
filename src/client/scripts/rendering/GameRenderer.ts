import PixelatedCanvasRenderer from "../engine/rendering/PixelatedCanvasRenderer";
import WorldRenderer from "./WorldRenderer";
import FroggerClient from "../FroggerClient";
import DebugOverlayRenderer from "./DebugOverlayRenderer";
import Renderer from "../engine/rendering/Renderer";
import Controls from "../input/Controls";
import ClientRegistries from "../engine/registry/ClientRegistries";

export default class GameRenderer extends PixelatedCanvasRenderer {
    public worldRenderer: Renderer;
    public debugRenderer: Renderer;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.worldRenderer = this.addChild(new WorldRenderer(canvas, FroggerClient.INSTANCE.world));
        this.debugRenderer = this.addChild(new DebugOverlayRenderer(canvas));
    }

    render(): void {
        super.render();
        if(Controls.DEBUG_TOGGLE.isPressed()) {
            this.debugRenderer.shouldRender = !this.debugRenderer.shouldRender;
        }
        for(let control of ClientRegistries.KEYBOARD_CONTROLS) {
            control.isDown();
        }
    }
}