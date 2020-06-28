import KeyboardInput from "./KeyboardInput.js";
import Identifiable from "../../../../../main/scripts/engine/identifier/Identifiable.js";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier.js";

export default class Key implements Identifiable {
    IDENTIFIER: Identifier;
    public code: string;

    constructor(code: string) {
        this.code = code;
    }

    isDown(): boolean {
        return KeyboardInput.keys[this.code];
    }
}