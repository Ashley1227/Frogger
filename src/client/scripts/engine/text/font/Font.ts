import Identifiable from "../../../../../main/scripts/engine/identifier/Identifiable";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier";

export default class Font implements Identifiable {
    public IDENTIFIER: Identifier;

    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}