import Identifiable from "../identifier/Identifiable";
import Identifier from "../identifier/Identifier";
import BlockType from "./BlockType";

export default class BlockState implements Identifiable {
    public IDENTIFIER: Identifier;
    public TYPE: BlockType;

    constructor(type: BlockType) {
        this.TYPE = type;
    }
}