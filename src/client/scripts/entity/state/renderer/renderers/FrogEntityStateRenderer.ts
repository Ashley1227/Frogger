import BasicEntityStateRenderer from "../../../../engine/entity/state/renderer/renderers/BasicEntityStateRenderer";
import Texture from "../../../../engine/resources/texture/Texture";
import FrogEntityState from "../../../../../../main/scripts/entity/state/states/FrogEntityState";
import Textures from "../../../../Textures";

export default class FrogEntityStateRenderer extends BasicEntityStateRenderer<FrogEntityState> {
    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    getTexture(state: FrogEntityState): Texture {
        if(state.isHopping())
            return Textures.FROG_MOVING;
        else
            return Textures.FROG_STATIONARY;
    }
}