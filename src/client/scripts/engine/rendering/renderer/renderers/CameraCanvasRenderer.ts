import Texture from "../../../resources/texture/Texture";
import Vector2 from "../../../../../../main/scripts/engine/math/Vector2";
import Direction from "../../../../../../main/scripts/engine/math/Direction";
import {client} from "../../../../main";
import PixelatedCanvasRenderer from "./PixelatedCanvasRenderer";

export default class CameraCanvasRenderer extends PixelatedCanvasRenderer {
    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
    }

    render() {
        super.render();
    }

    drawTexture(texture: Texture, pos: Vector2, size: Vector2, direction?: Direction): void {
        super.drawTexture(texture, pos.subtract(client.camera.getPosition()).multiply(client.camera.scale), size.multiply(client.camera.getScale()), direction);
    }
}