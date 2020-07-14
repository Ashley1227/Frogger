import Identifiable from "../../../../../main/scripts/engine/identifier/Identifiable";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier";

export default class FillStyle implements Identifiable {
    IDENTIFIER: Identifier;
    public style: string;

    constructor(style: string) {
        this.style = style;
    }
}