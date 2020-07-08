import BlockState from "../../../../../main/scripts/engine/block/state/BlockState";
import Vector2 from "../../../../../main/scripts/engine/math/Vector2";
import RandomTextureBlockStateRenderer
    from "../../../engine/block/state/renderer/renderers/RandomTextureBlockStateRenderer";

export default class GrassBlockStateRenderer extends RandomTextureBlockStateRenderer {
    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    render() {
        super.render();
    }
}