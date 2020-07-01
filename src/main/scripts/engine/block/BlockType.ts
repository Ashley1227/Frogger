import Identifiable from "../identifier/Identifiable";
import Identifier from "../identifier/Identifier";
import BlockSettings from "./BlockSettings";
import BlockRenderType from "./BlockRenderType";
import BlockRenderTypes from "./BlockRenderTypes";

export default class BlockType implements Identifiable {
    public IDENTIFIER: Identifier;
    public SETTINGS: BlockSettings;

    public RENDER_TYPE: BlockRenderType = BlockRenderTypes.BASIC;

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

    getTexture(): Identifier {
        return this.SETTINGS.TEXTURE;
    }
}