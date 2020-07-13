import BlockState from "../../../../../../main/scripts/engine/block/state/BlockState";
import Vector2 from "../../../../../../main/scripts/engine/math/Vector2";
import CameraCanvasRenderer from "../../../rendering/renderer/renderers/CameraCanvasRenderer";

export default abstract class BlockStateRenderer<T extends BlockState> extends CameraCanvasRenderer {
    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    render() {
        super.render();
    }

    abstract renderBlockState(position: Vector2, state: T): void;
}