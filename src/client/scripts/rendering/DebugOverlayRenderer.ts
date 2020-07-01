import CanvasRenderer from "../engine/rendering/CanvasRenderer";
import WorldRenderer from "./WorldRenderer";
import FroggerClient from "../FroggerClient";

export default class DebugOverlayRenderer extends CanvasRenderer {
    public fps: string =  "0 ";

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.addChild(new WorldRenderer(canvas, FroggerClient.INSTANCE.world));
    }
    countFPS(fps: number) {
        super.countFPS(fps);
        this.fps = fps.toString();
    }

    render(): void {
        super.render();
        this.drawString(`${this.fps} FPS`, 0, 32, 32, "white");
    }
}