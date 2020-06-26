import CanvasRenderer from "./CanvasRenderer.js";
import ChunkRenderer from "./ChunkRenderer.js";

export default class DimensionRenderer extends CanvasRenderer {
    preInit(canvas: HTMLCanvasElement) {
        super.preInit(canvas);
    }
    init(canvas: HTMLCanvasElement) {
        super.init(canvas);
        this.ctx.imageSmoothingEnabled = false;
    }
    postInit(canvas: HTMLCanvasElement) {
        super.postInit(canvas);
        this.addChild(new ChunkRenderer(canvas));
    }
    onResize() {
        super.onResize();
        this.ctx.imageSmoothingEnabled = false;
    }

    render() {
        super.render();
    }

}