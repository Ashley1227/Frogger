import PixelatedCanvasRenderer from "../../../rendering/renderer/renderers/PixelatedCanvasRenderer";
import Vector2 from "../../../../../../main/scripts/engine/math/Vector2";
import EntityState from "../../../../../../main/scripts/engine/entity/state/EntityState";
import CameraCanvasRenderer from "../../../rendering/renderer/renderers/CameraCanvasRenderer";

export default abstract class EntityStateRenderer<T extends EntityState> extends CameraCanvasRenderer {
    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    render() {
        super.render();
    }

    abstract renderEntityState(position: Vector2, state: EntityState): void;
}