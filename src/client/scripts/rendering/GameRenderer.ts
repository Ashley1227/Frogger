import CanvasRenderer from "./CanvasRenderer.js";
import DimensionRenderer from "./DimensionRenderer.js";

export default class GameRenderer extends CanvasRenderer {
    preInit(canvas: HTMLCanvasElement) {
        super.preInit(canvas);
    }
    init(canvas: HTMLCanvasElement) {
        super.init(canvas);
        this.ctx.imageSmoothingEnabled = false;
    }
    postInit(canvas: HTMLCanvasElement) {
        super.postInit(canvas);
        this.addChild(new DimensionRenderer(canvas));
    }

    onResize() {
        super.onResize();
        this.ctx.imageSmoothingEnabled = false;
    }

    render(): void {
        super.render();
    }
}