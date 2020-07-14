import Font from "./font/Font";
import FillStyle from "./font/FillStyle";

export default class Text {
    public font: Font;

    public text: string;
    public size: number;
    public fillStyle: FillStyle;

    constructor(font: Font, fillStyle: FillStyle, text: string) {
        this.font = font;
        this.fillStyle = fillStyle;
        this.text = text;
    }
}