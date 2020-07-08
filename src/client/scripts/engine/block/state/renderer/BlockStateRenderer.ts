import PixelatedCanvasRenderer from "../../../rendering/renderer/renderers/PixelatedCanvasRenderer";
import BlockState from "../../../../../../main/scripts/engine/block/state/BlockState";
import Vector2 from "../../../../../../main/scripts/engine/math/Vector2";

export default abstract class BlockStateRenderer extends PixelatedCanvasRenderer {
    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    render() {
        super.render();
    }

    abstract renderBlockState(screenPos: Vector2, size: Vector2, position: Vector2, state: BlockState): void;
}