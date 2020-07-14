import BlockStateRenderer from "../BlockStateRenderer";
import Texture from "../../../../resources/texture/Texture";
import Vector2 from "../../../../../../../main/scripts/engine/math/Vector2";
import BlockState from "../../../../../../../main/scripts/engine/block/state/BlockState";

export default class BasicBlockStateRenderer<T extends BlockState> extends BlockStateRenderer<T> {
    private TEXTURE: Texture;

    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    setTexture(texture: Texture): BasicBlockStateRenderer<T> {
        this.TEXTURE = texture;
        return this;
    }

    getTexture(position: Vector2, state: BlockState): Texture {
        return this.TEXTURE;
    }

    renderBlockState(position: Vector2, state: T) {
        this.drawTexture(this.getTexture(position, state), position, new Vector2(1, 1));
    }
}