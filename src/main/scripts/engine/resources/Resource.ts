import Identifiable from "../identifier/Identifiable.js";
import Identifier from "../identifier/Identifier.js";

export default class Resource implements Identifiable {
    IDENTIFIER: Identifier;

    constructor() {
    }

    getIdentifier(): Identifier {
        return this.IDENTIFIER;
    }

    setIdentifier(identifier: Identifier): Identifiable {
        this.IDENTIFIER = identifier;
        return this;
    }

}