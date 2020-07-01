import Key from "../keyboard/Key";
import Identifiable from "../../../../../main/scripts/engine/identifier/Identifiable";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier";

export default class KeyboardControl implements Identifiable{
    IDENTIFIER: Identifier;
    public key: Key;

    private _default: Key;

    /**
     * What else am I supposed to call it? `default` is a reserved word ;-;
     */
    constructor(xX_default_Xx: Key) {
        this._default = xX_default_Xx;
    }

    bind(key: Key): KeyboardControl {
        this.key = key;
        return this;
    }

    getKey(): Key {
        if(this.key)
            return this.key;
        else
            return this._default;
    }

    isDown(): boolean {
        return this.getKey().isDown();
    }

    isPressed(): boolean {
        return this.getKey().isPressed();
    }

    isReleased(): boolean {
        return this.getKey().isReleased();
    }
}