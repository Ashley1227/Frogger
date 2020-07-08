import Registry from "../../../main/scripts/engine/registry/Registry";
import ClientRegistries from "../engine/registry/ClientRegistries";
import Identifier from "../../../main/scripts/engine/identifier/Identifier";
import Renderer from "../engine/rendering/renderer/Renderer";
import GameRenderer from "./renderers/GameRenderer";
import GrassBlockStateRenderer from "../block/renderer/renderers/GrassBlockStateRenderer";
import BasicBlockStateRenderer from "../engine/block/state/renderer/renderers/BasicBlockStateRenderer";
import Textures from "../Textures";
import WorldRenderer from "./renderers/WorldRenderer";
import ChunkRenderer from "./renderers/ChunkRenderer";
import DebugOverlayRenderer from "./renderers/DebugOverlayRenderer";
import FrogEntityStateRenderer from "../entity/state/renderer/renderers/FrogEntityStateRenderer";
import TextRenderer from "../engine/rendering/renderer/renderers/TextRenderer";
import Fonts from "../text/font/Fonts";
import FillStyles from "../text/font/FillStyles";

console.debug("");
console.debug("Renderers");
console.debug("==========");
export default class Renderers {
    public static CANVAS: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");

    public static TEXT_RENDERER: TextRenderer = Renderers.register(
        new TextRenderer(Renderers.CANVAS).setFont(Fonts.HELVETICA).setFillStyle(FillStyles.WHITE).initialise(),
        "text_renderer");

    public static CHUNK_RENDERER: ChunkRenderer = Renderers.register(new ChunkRenderer(Renderers.CANVAS).initialise(), "chunk_renderer");
    public static WORLD_RENDERER: WorldRenderer = Renderers.register(new WorldRenderer(Renderers.CANVAS).initialise(), "world_renderer");

    public static DEBUG_OVERLAY_RENDERER: DebugOverlayRenderer = Renderers.register(
        new DebugOverlayRenderer(Renderers.CANVAS).setFont(Fonts.HELVETICA).setFillStyle(FillStyles.WHITE).initialise(),
        "debug_overlay_renderer");

    public static GAME_RENDERER: GameRenderer = Renderers.register(new GameRenderer(Renderers.CANVAS).initialise(), "game_renderer");

    public static DIRT: BasicBlockStateRenderer = Renderers.registerBlockStateRenderer(new BasicBlockStateRenderer(Renderers.CANVAS).setTexture(Textures.DIRT).initialise(), "dirt");
    public static RED_FLOWER: BasicBlockStateRenderer = Renderers.registerBlockStateRenderer(new BasicBlockStateRenderer(Renderers.CANVAS).setTexture(Textures.RED_FLOWER).initialise(), "red_flower");

    public static GRASS: GrassBlockStateRenderer = Renderers.registerBlockStateRenderer(new GrassBlockStateRenderer(Renderers.CANVAS)
        .setTextures(
            Textures.GRASS_0,
            Textures.GRASS_1,
            Textures.GRASS_2,
            Textures.GRASS_3,
            Textures.GRASS_4,
            Textures.GRASS_5
        ).initialise(),
         "grass");

    public static FROG: FrogEntityStateRenderer = Renderers.registerEntityStateRenderer(new FrogEntityStateRenderer(Renderers.CANVAS).setTexture(Textures.FROG_MOVING), "frog");


    static register<T extends Renderer>(renderer: Renderer, name: string): T {
        return <T>Registry.register(ClientRegistries.RENDERERS, renderer, new Identifier("frogger", name));
    }
    static registerBlockStateRenderer<T extends Renderer>(renderer: Renderer, name: string): T {
        return <T>this.CHUNK_RENDERER.addChild(Registry.register(ClientRegistries.RENDERERS, renderer, new Identifier("frogger", name)));
    }
    static registerEntityStateRenderer<T extends Renderer>(renderer: Renderer, name: string): T {
        return <T>this.WORLD_RENDERER.addChild(Registry.register(ClientRegistries.RENDERERS, renderer, new Identifier("frogger", name)));
    }
}