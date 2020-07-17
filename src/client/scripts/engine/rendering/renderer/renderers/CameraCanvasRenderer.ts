import Texture from "../../../resources/texture/Texture";
import Vector2 from "../../../../../../main/scripts/engine/math/Vector2";
import Direction from "../../../../../../main/scripts/engine/math/Direction";
import PixelatedCanvasRenderer from "./PixelatedCanvasRenderer";
import {client} from "../../../../client";

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

    drawRect(position: Vector2, size: Vector2, fillStyle: string): void {
        super.drawRect(position.subtract(client.camera.getPosition()).multiply(client.camera.scale), size.multiply(client.camera.getScale()), fillStyle);
    }
}