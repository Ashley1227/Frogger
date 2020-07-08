import TextureLoader from "./engine/resources/texture/TextureLoader";
import Identifier from "../../main/scripts/engine/identifier/Identifier";
import TexMap from "./engine/resources/texture/map/TexMap";
import Texture from "./engine/resources/texture/Texture";
import Registry from "../../main/scripts/engine/registry/Registry";
import ClientRegistries from "./engine/registry/ClientRegistries";
import Vector2 from "../../main/scripts/engine/math/Vector2";

console.debug("");
console.debug("Textures");
console.debug("==========");
export default class Textures {
    // Blocks
    static BLOCKS: Texture = Textures.register(TextureLoader.loadResource(new Identifier("frogger", "blocks")), "blocks");
    static BLOCKS_MAP: TexMap = new TexMap(Textures.BLOCKS).setSubSize(16, 16);

    static DIRT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(0, 0), "dirt");
    static STREAKY_DIRT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(1, 0), "streaky_dirt");
    static WAVY_DIRT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(2, 0), "wavy_dirt");
    static CRACKED_DIRT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(3, 0), "cracked_dirt");

    static GRASS_0: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(4, 0), "grass_0");
    static GRASS_1: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(5, 0), "grass_1");
    static GRASS_2: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(6, 0), "grass_2");
    static GRASS_3: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(7, 0), "grass_3");
    static GRASS_4: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(8, 0), "grass_4");
    static GRASS_5: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(9, 0), "grass_5");

    static RED_FLOWER: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(10, 0), "red_flower");

    // Entities
    static FROG: Texture = Textures.register(TextureLoader.loadResource(new Identifier("frogger", "entity/frog")), "frog");
    static FROG_MAP: TexMap = new TexMap(Textures.FROG).setSubSize(16, 16);
    static FROG_STATIONARY: Texture = Textures.register(Textures.FROG_MAP.createSub(0, 0), "frog_stationary");
    static FROG_MOVING: Texture = Textures.register(Textures.FROG_MAP.createSpecialSub(0, 16, 16, 20), "frog_moving").setWorldSize(new Vector2(1, 1.25));

    static register(texture: Texture, name: string): Texture {
        return Registry.register(ClientRegistries.TEXTURES, texture, new Identifier("frogger", name));
    }
}