import Identifiable from "../../identifier/Identifiable";
import Identifier from "../../identifier/Identifier";
import BlockType from "../type/BlockType";
import Vector2 from "../../math/Vector2";

export default class BlockState implements Identifiable {
    public IDENTIFIER: Identifier;
    public TYPE: BlockType;

    public RENDERER: Identifier;

    constructor(type: BlockType) {
        this.TYPE = type;
    }

    setDefaultRenderer(renderer: Identifier): BlockState {
        this.RENDERER = renderer;
        return this;
    }

    getRenderer(position: Vector2): Identifier {
        return this.RENDERER;
    }
}