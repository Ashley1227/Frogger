import TextureLoader from "./engine/resources/texture/TextureLoader";
import Identifier from "../../main/scripts/engine/identifier/Identifier";
import TexMap from "./engine/resources/texture/map/TexMap";
import Texture from "./engine/resources/texture/Texture";
import Registry from "../../main/scripts/engine/registry/Registry";
import ClientRegistries from "./engine/registry/ClientRegistries";

console.debug("");
console.debug("Textures");
console.debug("==========");
export default class Textures {
    // Blocks
    static BLOCKS: Texture = Textures.register(TextureLoader.loadResource(new Identifier("frogger", "blocks")), "blocks");
    static BLOCKS_MAP: TexMap = new TexMap(Textures.BLOCKS).setSubSize(16, 16);

    static DIRT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(0, 0), "dirt");
    static GRASS: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(1, 0), "grass");

    // Entities
    static FROG: Texture = Textures.register(TextureLoader.loadResource(new Identifier("frogger", "entity/frog")), "frog");
    static FROG_MAP: TexMap = new TexMap(Textures.FROG).setSubSize(16, 16);
    static FROG_UP: Texture = Textures.register(Textures.FROG_MAP.createSub(0, 0), "frog_up");
    static FROG_RIGHT: Texture = Textures.register(Textures.FROG_MAP.createSub(1, 0), "frog_right");
    static FROG_LEFT: Texture = Textures.register(Textures.FROG_MAP.createSub(2, 0), "frog_left");
    static FROG_DOWN: Texture = Textures.register(Textures.FROG_MAP.createSub(3, 0), "frog_down");

    static register(texture: Texture, name: string): Texture {
        return Registry.register(ClientRegistries.TEXTURES, texture, new Identifier("frogger", name));
    }
}