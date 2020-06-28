import PixelatedCanvasRenderer from "./PixelatedCanvasRenderer.js";
import WorldRenderer from "./WorldRenderer.js";

export default class GameRenderer extends PixelatedCanvasRenderer {
    preInit(canvas: HTMLCanvasElement) {
        super.preInit(canvas);
    }
    init(canvas: HTMLCanvasElement) {
        super.init(canvas);
    }
    postInit(canvas: HTMLCanvasElement) {
        super.postInit(canvas);
        this.addChild(new WorldRenderer(canvas));
    }
    render(): void {
        super.render();
    }
}