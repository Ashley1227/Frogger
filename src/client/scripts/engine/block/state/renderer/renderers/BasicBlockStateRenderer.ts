import BlockStateRenderer from "../BlockStateRenderer";
import Texture from "../../../../resources/texture/Texture";
import Vector2 from "../../../../../../../main/scripts/engine/math/Vector2";
import BlockState from "../../../../../../../main/scripts/engine/block/state/BlockState";

export default class BasicBlockStateRenderer extends BlockStateRenderer {
    public TEXTURE: Texture;

    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    setTexture(texture: Texture): BasicBlockStateRenderer {
        this.TEXTURE = texture;
        return this;
    }

    renderBlockState(screenPos: Vector2, size: Vector2, position: Vector2, state: BlockState) {
        this.drawTexture(this.TEXTURE, screenPos, size);
    }
}