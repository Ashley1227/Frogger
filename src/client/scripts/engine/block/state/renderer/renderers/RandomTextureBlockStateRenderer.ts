import BlockStateRenderer from "../BlockStateRenderer";
import Texture from "../../../../resources/texture/Texture";
import Vector2 from "../../../../../../../main/scripts/engine/math/Vector2";
import BlockState from "../../../../../../../main/scripts/engine/block/state/BlockState";
import Random from "../../../../../../../main/scripts/engine/math/Random";

export default class RandomTextureBlockStateRenderer extends BlockStateRenderer {
    public TEXTURES: Texture[];
    public RANDOM: Random;

    constructor(canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        super(canvas, ctx);
        this.RANDOM = new Random(0);
    }

    setTextures(...textures: Texture[]): RandomTextureBlockStateRenderer {
        this.TEXTURES = textures;
        return this;
    }

    render() {
        super.render();
    }

    renderBlockState(screenPos: Vector2, size: Vector2, position: Vector2, state: BlockState) {
        this.RANDOM.state = (Math.abs(position.x) + 3) * (Math.abs(position.x) + 3) * (Math.abs(position.y) + 3) * 3.3;
        this.drawTexture(this.RANDOM.choice(this.TEXTURES), screenPos, size);
    }
}