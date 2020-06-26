import Renderer from "./Renderer.js";
import Texture from "../../../main/scripts/engine/resources/texture/Texture.js";
import Textures from "../resources/Textures.js";

export default class CanvasRenderer extends Renderer {
    public ctx: CanvasRenderingContext2D;

    preInit(canvas: HTMLCanvasElement) {
        super.preInit(canvas);
        this.ctx = canvas.getContext("2d");
    }

    init(canvas: HTMLCanvasElement) {
        super.init(canvas);
    }

    postInit(canvas: HTMLCanvasElement) {
        super.postInit(canvas);
    }

    drawTexture(texture: Texture, x: number, y: number, w: number, h: number) {
        this.ctx.drawImage(texture.image, texture.sX, texture.sY, texture.sW, texture.sH, x, y, w, h);
    }

    drawString(text: string, x: number, y: number, size: number, fillStyle: string) {
        this.ctx.font = `${size}px Verdana`
        this.ctx.fillStyle = fillStyle;
        this.ctx.fillText(text, x,y);
    }
}