import Identifiable from "../../../../../main/scripts/engine/identifier/Identifiable";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier";

export default class MouseButton implements Identifiable {
    IDENTIFIER: Identifier;
    public code: number;

    constructor(code: number) {
        this.code = code;
    }
}