import Renderer from "../Renderer";
import Texture from "../../../resources/texture/Texture";
import Vector2 from "../../../../../../main/scripts/engine/math/Vector2";
import Direction from "../../../../../../main/scripts/engine/math/Direction";

export default class CanvasRenderer extends Renderer {
    public ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas);

        if(ctx)
            this.ctx = ctx;
        else
            this.ctx = canvas.getContext("2d", {alpha: false});
    }

    render() {
        if(!(this.parent instanceof CanvasRenderer) || this.parent.ctx != this.ctx)
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        super.render();
    }

    drawTexture(texture: Texture, pos: Vector2, size: Vector2, direction?: Direction): void {
        if(direction) {
            this.ctx.save();
            this.ctx.translate(pos.x + this.offset.x, pos.y + this.offset.y);
            this.ctx.rotate(-direction.yaw);
            this.ctx.drawImage(texture.image, texture.pos.x, texture.pos.y, texture.size.x, texture.size.y, 0, 0, size.x, size.y);
            this.ctx.restore();
        } else {
            this.ctx.drawImage(texture.image, texture.pos.x, texture.pos.y, texture.size.x, texture.size.y, pos.x + this.offset.x, pos.y + this.offset.y, size.x, size.y);
        }
    }

    drawRect(x: number, y: number, w: number, h: number, fillStyte: string): void {
        this.ctx.fillStyle = fillStyte;
        this.ctx.fillRect(x, y, w, h);
    }
}