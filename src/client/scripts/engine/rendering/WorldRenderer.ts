import PixelatedCanvasRenderer from "./PixelatedCanvasRenderer.js";
import ChunkRenderer from "./ChunkRenderer.js";
import Keys from "../input/keyboard/Keys.js";

export default class WorldRenderer extends PixelatedCanvasRenderer {
    preInit(canvas: HTMLCanvasElement) {
        super.preInit(canvas);
    }
    init(canvas: HTMLCanvasElement) {
        super.init(canvas);
    }
    postInit(canvas: HTMLCanvasElement) {
        super.postInit(canvas);
        this.addChild(new ChunkRenderer(canvas));
    }
    render(): void {
        super.render();
        if(Keys.W.isDown()) {
            this.offset(0, 1);
        }
        if(Keys.S.isDown()) {
            this.offset(0, -1);
        }
        if(Keys.A.isDown()) {
            this.offset(1, 0);
        }
        if(Keys.D.isDown()) {
            this.offset(- 1, 0);
        }
    }
}