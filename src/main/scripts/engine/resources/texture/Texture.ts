import Resource from "../Resource.js";

export default class Texture extends Resource {
    public image: HTMLImageElement;
    public width: number;
    public height: number;

    /**
     * Source X
     */
    public sX: number;
    /**
     * Source Y
     */
    public sY: number;
    /**
     * Source width
     */
    public sW: number;
    /**
     * Source height
     */
    public sH: number;

    constructor(image: HTMLImageElement) {
        super();
        this.image = image;
        this.width = image.width;
        this.height = image.height;

        this.setViewport(0, 0, this.width, this.height);
    }

    setViewport(sX: number, sY: number, sW: number, sH: number): Texture {
        this.sX = sX;
        this.sY = sY;

        this.sW = sW;
        this.sH = sH;
        return this;
    }

    copy() {
        return new Texture(this.image);
    }

    static of(texture: Texture, sX: number, sY: number, sW: number, sH:number): Texture {
        return texture.copy().setViewport(sX, sY, sW, sH);
    }
}