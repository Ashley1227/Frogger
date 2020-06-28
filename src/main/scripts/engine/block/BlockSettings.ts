import Identifier from "../identifier/Identifier.js";

export default class BlockSettings {
    public TEXTURE: Identifier;

    public texture(identifier: Identifier): BlockSettings {
        this.TEXTURE = identifier;
        return this;
    }
}