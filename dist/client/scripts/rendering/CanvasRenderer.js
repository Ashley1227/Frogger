import Renderer from "./Renderer.js";
export default class CanvasRenderer extends Renderer {
    preInit(canvas) {
        super.preInit(canvas);
        this.ctx = canvas.getContext("2d");
    }
    init(canvas) {
        super.init(canvas);
    }
    postInit(canvas) {
        super.postInit(canvas);
    }
    drawTexture(texture, x, y, w, h) {
        this.ctx.drawImage(texture.image, texture.sX, texture.sY, texture.sW, texture.sH, x, y, w, h);
    }
    drawString(text, x, y, size, fillStyle) {
        this.ctx.font = `${size}px Verdana`;
        this.ctx.fillStyle = fillStyle;
        this.ctx.fillText(text, x, y);
    }
}
//# sourceMappingURL=CanvasRenderer.js.map