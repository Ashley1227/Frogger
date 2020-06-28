import Renderer from "./Renderer.js";
import Texture from "../resources/texture/Texture.js";

export default class CanvasRenderer extends Renderer {
    public ctx: CanvasRenderingContext2D;

    preInit(canvas: HTMLCanvasElement): void {
        super.preInit(canvas);
        this.ctx = canvas.getContext("2d");
    }

    init(canvas: HTMLCanvasElement): void {
        super.init(canvas);
    }

    postInit(canvas: HTMLCanvasElement): void {
        super.postInit(canvas);
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        super.render();
    }

    drawTexture(texture: Texture, x: number, y: number, w: number, h: number): void {
        this.ctx.drawImage(texture.image, texture.sX, texture.sY, texture.sW, texture.sH, x + this.xOffset, y + this.yOffset, w, h);
    }

    drawString(text: string, x: number, y: number, size: number, fillStyle: string): void {
        this.ctx.font = `${size}px Verdana`
        this.ctx.fillStyle = fillStyle;
        this.ctx.fillText(text, x + this.xOffset, y + this.yOffset);
    }
}