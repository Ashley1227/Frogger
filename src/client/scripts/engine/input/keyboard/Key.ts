import KeyboardInput from "./KeyboardInput";
import Identifiable from "../../../../../main/scripts/engine/identifier/Identifiable";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier";

export default class Key implements Identifiable {
    IDENTIFIER: Identifier;
    public code: string;

    public last: boolean = false;

    constructor(code: string) {
        this.code = code;
    }

    /**
     * Returns true if the key is pressed
     */
    isDown(): boolean {
        this.last = KeyboardInput.keysDown[this.code];
        return this.last;
    }

    /**
     * Returns true one time when the key is pressed
     */
    isPressed(): boolean {
        return KeyboardInput.keysDown[this.code] && !this.last;
    }

    /**
     * Returns true one time when the key is released
     */
    isReleased(): boolean {
        return KeyboardInput.keysDown[this.code] && !this.last;
    }
}