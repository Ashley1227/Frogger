import PixelatedCanvasRenderer from "../../engine/rendering/renderer/renderers/PixelatedCanvasRenderer";
import ClientRegistries from "../../engine/registry/ClientRegistries";
import Renderers from "../Renderers";
import WorldRenderer from "./WorldRenderer";
import DebugOverlayRenderer from "./DebugOverlayRenderer";
import {client} from "../../main";
import Controls from "../../input/Controls";
import Vector2 from "../../../../main/scripts/engine/math/Vector2";
import Keys from "../../engine/input/keyboard/Keys";
import FollowEntityCamera from "../../engine/rendering/camera/FollowEntityCamera";
import FrogEntityState from "../../../../main/scripts/entity/state/states/FrogEntityState";
import Direction from "../../../../main/scripts/engine/math/Direction";
import {PI, TAU} from "../../../../main/scripts/engine/math/math";

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
        // it doesn't actually have to render, just have to call it
        client.camera.render(this.canvas);
        this.WORLD_RENDERER.renderWorld(client.world);
        this.DEBUG_OVERLAY_RENDERER.renderOverlay();

        if(Keys.W.isPressed()) {
            client.world.scheduleTick(() => {
            (<FrogEntityState>(<FollowEntityCamera>client.camera).entity).hop(new Direction(0));
            });
        }
        if(Keys.S.isPressed()) {
            client.world.scheduleTick(() => {
                (<FrogEntityState>(<FollowEntityCamera>client.camera).entity).hop(new Direction(PI));
            });
        }
        if(Keys.A.isPressed()) {
            client.world.scheduleTick(() => {
                (<FrogEntityState>(<FollowEntityCamera>client.camera).entity).hop(new Direction(PI / 2));
            });
        }
        if(Keys.D.isPressed()) {
            client.world.scheduleTick(() => {
                (<FrogEntityState>(<FollowEntityCamera>client.camera).entity).hop(new Direction(PI*1.5));
            });
        }
        if(Controls.ZOOM_IN.isDown()) {
            client.camera.changeScale(new Vector2(0.4, 0.4));
        }
        if(Controls.ZOOM_OUT.isDown()) {
            client.camera.changeScale(new Vector2(-0.4, -0.4));
        }

        // CLIENT.camera.position = CLIENT.camera.position.add(new Vector2(0, 0.1));

        for(let control of ClientRegistries.KEYBOARD_CONTROLS) {
            control.isDown();
        }
        this.finishRender();
    }
}