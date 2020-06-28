import Identifiable from "../identifier/Identifiable.js";
import Identifier from "../identifier/Identifier.js";
import BlockSettings from "./BlockSettings.js";

export default class Block implements Identifiable {
    public IDENTIFIER: Identifier;
    public SETTINGS: BlockSettings;

    constructor(settings: BlockSettings) {
        this.SETTINGS = settings;
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