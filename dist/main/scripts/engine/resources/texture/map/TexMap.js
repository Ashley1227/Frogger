import Texture from "../Texture.js";
export default class TexMap extends Texture {
    constructor(texture) {
        super(texture.image);
        this.subWidth = 16;
        this.subHeight = 16;
    }
    setSubSize(subWidth, subHeight) {
        this.subWidth = subWidth;
        this.subHeight = subHeight;
        return this;
    }
    createSub(x, y) {
        return this.copy().setViewport(x * this.subWidth + this.sX, y * this.subHeight + this.sY, this.subWidth, this.subHeight);
    }
}
//# sourceMappingURL=TexMap.js.map