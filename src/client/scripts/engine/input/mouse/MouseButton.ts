import Identifiable from "../../../../../main/scripts/engine/identifier/Identifiable.js";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier.js";

export default class Key implements Identifiable {
    IDENTIFIER: Identifier;
    public code: number;

    constructor(code: number) {
        this.code = code;
    }
}