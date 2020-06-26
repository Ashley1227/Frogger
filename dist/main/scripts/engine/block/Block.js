import Identifier from "../identifier/Identifier.js";
export default class Block {
    constructor() {
    }
    getIdentifier() {
        return this.IDENTIFIER;
    }
    setIdentifier(identifier) {
        if (typeof identifier == "string")
            this.IDENTIFIER = Identifier.of(identifier);
        else
            this.IDENTIFIER = identifier;
        return this;
    }
}
//# sourceMappingURL=Block.js.map