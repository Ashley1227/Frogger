import Resource from "../../../../../main/scripts/engine/resources/Resource";
import Vector2 from "../../../../../main/scripts/engine/math/Vector2";

export default class Texture extends Resource {
    public image: HTMLImageElement;
    public width: number;
    public height: number;

    public pos: Vector2;
    public size: Vector2;

    public inGameSize: Vector2;

    constructor(image: HTMLImageElement) {
        super();
        this.image = image;
        this.width = image.width;
        this.height = image.height;

        this.setViewport(0, 0, this.width, this.height);
        this.setWorldSize(new Vector2(1, 1));
    }

    setWorldSize(size: Vector2): Texture {
        this.inGameSize = size;
        return this;
    }

    /**
     * TODO: come up with a better solution lol
     * There were weird line things
     */
    setViewport(sX: number, sY: number, sW: number, sH: number): Texture {
        this.pos = new Vector2(sX, sY);
        this.size = new Vector2(sW - 0.001, sH - 0.001);
        return this;
    }

    copy() {
        return new Texture(this.image);
    }

    static of(texture: Texture, sX: number, sY: number, sW: number, sH:number): Texture {
        return texture.copy().setViewport(sX, sY, sW, sH);
    }
}