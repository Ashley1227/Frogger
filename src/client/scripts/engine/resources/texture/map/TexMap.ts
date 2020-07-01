import Texture from "../Texture";

export default class TexMap extends Texture {
    public subWidth: number = 16;
    public subHeight: number = 16;

    constructor(texture: Texture) {
        super(texture.image);
    }

    setSubSize(subWidth: number, subHeight: number): TexMap {
        this.subWidth = subWidth;
        this.subHeight = subHeight;
        return this;
    }

    createSub(x: number, y: number): Texture {
        return this.copy().setViewport(
            x * this.subWidth + this.sX,
            y * this.subHeight + this.sY,
            this.subWidth,
            this.subHeight
        );
    }
}