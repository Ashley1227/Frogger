import RandomTextureBlockStateRenderer
    from "../../../../engine/block/state/renderer/renderers/RandomTextureBlockStateRenderer";
import Texture from "../../../../engine/resources/texture/Texture";
import Vector2 from "../../../../../../main/scripts/engine/math/Vector2";
import GrassBlockState from "../../../../../../main/scripts/block/state/states/GrassBlockState";

export default class GrassBlockStateRenderer extends RandomTextureBlockStateRenderer<GrassBlockState> {
    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    renderBlockState(position: Vector2, state: GrassBlockState) {
        super.renderBlockState(position, state);
    }

    getTexture(position: Vector2, state: GrassBlockState): Texture {
        return super.getTexture(position, state);
    }
}