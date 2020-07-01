import Identifier from "../identifier/Identifier";

export default class BlockSettings {
    public TEXTURE: Identifier;

    constructor() {
    }


    public texture(texture: Identifier): BlockSettings {
        this.TEXTURE = texture;
        return this;
    }
}