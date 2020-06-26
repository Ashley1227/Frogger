import Resource from "../Resource.js";
export default class Texture extends Resource {
    constructor(image) {
        super();
        this.image = image;
        this.width = image.width;
        this.height = image.height;
        this.setViewport(0, 0, this.width, this.height);
    }
    setViewport(sX, sY, sW, sH) {
        this.sX = sX;
        this.sY = sY;
        this.sW = sW;
        this.sH = sH;
        return this;
    }
    copy() {
        return new Texture(this.image);
    }
    static of(texture, sX, sY, sW, sH) {
        return texture.copy().setViewport(sX, sY, sW, sH);
    }
}
//# sourceMappingURL=Texture.js.map