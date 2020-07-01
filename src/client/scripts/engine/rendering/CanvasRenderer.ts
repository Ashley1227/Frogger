import Renderer from "./Renderer";
import Texture from "../resources/texture/Texture";

export default class CanvasRenderer extends Renderer {
    public ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.ctx = canvas.getContext("2d", {
            alpha: false
        });
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        super.render();
    }

    drawTexture(texture: Texture, x: number, y: number, w: number, h: number): void {
        this.ctx.drawImage(texture.image, texture.sX, texture.sY, texture.sW, texture.sH, x + this.xOffset, y + this.yOffset, w, h);
    }

    drawString(text: string, x: number, y: number, size: number, fillStyle: string): void {
        this.ctx.font = `${size}px Helvetica Neue`
        this.ctx.fillStyle = fillStyle;
        this.ctx.fillText(text, x + this.xOffset, y + this.yOffset);
    }
}