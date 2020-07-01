import PixelatedCanvasRenderer from "../engine/rendering/PixelatedCanvasRenderer";
import ChunkRenderer from "./ChunkRenderer";
import Keys from "../engine/input/keyboard/Keys";
import FroggerClient from "../FroggerClient";
import BlockTypes from "../../../main/scripts/block/type/BlockTypes";
import Chunk from "../../../main/scripts/engine/world/chunk/Chunk";
import World from "../../../main/scripts/engine/world/World";
import Renderer from "../engine/rendering/Renderer";
import Vector2 from "../../../main/scripts/engine/math/Vector2";

export default class WorldRenderer extends PixelatedCanvasRenderer {
    public world: World;
    public chunkRenderer: Renderer;

    constructor(canvas: HTMLCanvasElement, world: World) {
        super(canvas);
        this.world = world;

        this.chunkRenderer = this.addChild(new ChunkRenderer(canvas, new Chunk(FroggerClient.INSTANCE.world, new Vector2(0, 0))));
        this.chunkRenderer.shouldRender = false;

        this.initialise();
    }
    render(): void {
        super.render();
        if(Keys.W.isDown()) {
            this.offset(0, 10);
        }
        if(Keys.S.isDown()) {
            this.offset(0, -10);
        }
        if(Keys.A.isDown()) {
            this.offset(10, 0);
        }
        if(Keys.D.isDown()) {
            this.offset(- 10, 0);
        }
        this.chunkRenderer.render();
    }
}