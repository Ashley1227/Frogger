import Identifiable from "../../identifier/Identifiable";
import Identifier from "../../identifier/Identifier";
import BlockSettings from "./BlockSettings";
import BlockRenderType from "./BlockRenderType";
import BlockRenderTypes from "./BlockRenderTypes";
import BlockState from "../state/BlockState";

export default class BlockType implements Identifiable {
    public IDENTIFIER: Identifier;
    public SETTINGS: BlockSettings;

    public RENDER_TYPE: BlockRenderType = BlockRenderTypes.BASIC;

    private DEFAULT_STATE: BlockState;

    constructor(settings: BlockSettings) {
        this.SETTINGS = settings;
    }

    getIdentifier(): Identifier {
        return this.IDENTIFIER;
    }

    setRenderType(renderType: BlockRenderType): BlockType {
        this.RENDER_TYPE = renderType;
        return this;
    }

    setDefaultState(state: BlockState): BlockState {
        this.DEFAULT_STATE = state;
        return this.DEFAULT_STATE;
    }
    createState(): BlockState {
        return this.DEFAULT_STATE.clone();
    }
    basicBlockState(): BlockState {
        return this.setDefaultState(new BlockState(this));
    }
}