import BlockStateRenderer from "../BlockStateRenderer";
import Texture from "../../../../resources/texture/Texture";
import Vector2 from "../../../../../../../main/scripts/engine/math/Vector2";
import BlockState from "../../../../../../../main/scripts/engine/block/state/BlockState";
import Random from "../../../../../../../main/scripts/engine/math/Random";
import BasicBlockStateRenderer from "./BasicBlockStateRenderer";

export default class RandomTextureBlockStateRenderer<T extends BlockState> extends BasicBlockStateRenderer<T> {
    public TEXTURES: Texture[];
    public RANDOM: Random;

    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
        this.RANDOM = new Random(0);
    }

    setTextures(...textures: Texture[]): RandomTextureBlockStateRenderer<T> {
        this.TEXTURES = textures;
        return this;
    }

    render() {
        super.render();
    }

    getTexture(position: Vector2, state: T): Texture {
        this.RANDOM.state = (Math.abs(position.x) + 3) * (Math.abs(position.x) + 3) * (Math.abs(position.y) + 3) * 3.3;
        return this.RANDOM.choice(this.TEXTURES);
    }
}