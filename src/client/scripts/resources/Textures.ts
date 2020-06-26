import TextureLoader from "../../../main/scripts/engine/resources/texture/TextureLoader.js";
import Identifier from "../../../main/scripts/engine/identifier/Identifier.js";
import TexMap from "../../../main/scripts/engine/resources/texture/map/TexMap.js";
import Texture from "../../../main/scripts/engine/resources/texture/Texture.js";
import Registries from "../../../main/scripts/engine/registry/Registries.js";
import Registry from "../../../main/scripts/engine/registry/Registry.js";

export default class Textures {
    // Blocks
    static BLOCKS: Texture = Textures.register(TextureLoader.loadResource(new Identifier("frogger", "blocks")), "blocks");
    static BLOCKS_MAP: TexMap = new TexMap(Textures.BLOCKS).setSubSize(16, 16);

    static DIRT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(0, 0), "dirt");

    // Entities
    static FROG: Texture = Textures.register(TextureLoader.loadResource(new Identifier("frogger", "entity/frog")), "frog");
    static FROG_MAP: TexMap = new TexMap(Textures.FROG).setSubSize(16, 16);
    static FROG_UP: Texture = Textures.register(Textures.FROG_MAP.createSub(0, 0), "frog_up");
    static FROG_RIGHT: Texture = Textures.register(Textures.FROG_MAP.createSub(1, 0), "frog_right");
    static FROG_LEFT: Texture = Textures.register(Textures.FROG_MAP.createSub(2, 0), "frog_left");
    static FROG_DOWN: Texture = Textures.register(Textures.FROG_MAP.createSub(3, 0), "frog_down");


    static register(t: Texture, name: string): Texture {
        return Registry.register(Registries.TEXTURES, t, new Identifier("frogger", name));
    }
}