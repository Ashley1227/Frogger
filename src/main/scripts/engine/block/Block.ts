import Identifiable from "../identifier/Identifiable.js";
import Identifier from "../identifier/Identifier.js";

export default class Block implements Identifiable {
    IDENTIFIER: Identifier;

    constructor() {
    }

    getIdentifier(): Identifier {
        return this.IDENTIFIER;
    }

    setIdentifier(identifier: Identifier | string): Identifiable {
        if(typeof identifier == "string")
            this.IDENTIFIER = Identifier.of(identifier);
        else
            this.IDENTIFIER = identifier;
        return this;
    }
}