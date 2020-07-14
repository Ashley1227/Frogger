import CanvasRenderer from "./CanvasRenderer";
import Vector2 from "../../../../../../main/scripts/engine/math/Vector2";
import Font from "../../../text/font/Font";
import Text from "../../../text/Text";
import FillStyle from "../../../text/font/FillStyle";

export default class TextRenderer extends CanvasRenderer {
    public font: Font;
    public fillStyle: FillStyle;

    setFont(font: Font): TextRenderer {
        this.font = font;
        return this;
    }
    setFillStyle(fillStyle: FillStyle): TextRenderer {
        this.fillStyle = fillStyle;
        return this;
    }

    drawString(text: string, pos: Vector2, size: number, fillStyle: string): void {
        this.ctx.font = `${size}px ${this.font.name}`
        this.ctx.fillStyle = fillStyle;
        this.ctx.fillText(text, pos.x + this.offset.x, pos.y + this.offset.y);
    }

    drawText(text: Text, pos: Vector2) {
        this.ctx.font = `${text.size}px ${text.font.name}`
        this.ctx.fillStyle = text.fillStyle.style;
        this.ctx.fillText(text.text, pos.x + this.offset.x, pos.y + this.offset.y);
    }
}