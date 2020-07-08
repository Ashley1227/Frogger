import PixelatedCanvasRenderer from "../../../rendering/renderer/renderers/PixelatedCanvasRenderer";
import Vector2 from "../../../../../../main/scripts/engine/math/Vector2";
import EntityState from "../../../../../../main/scripts/engine/entity/state/EntityState";

export default abstract class EntityStateRenderer<T extends EntityState> extends PixelatedCanvasRenderer {
    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    render() {
        super.render();
    }

    abstract renderEntityState(size: Vector2, position: Vector2, state: EntityState): void;
}