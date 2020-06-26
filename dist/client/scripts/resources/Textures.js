import TextureLoader from "../../../main/scripts/engine/resources/texture/TextureLoader.js";
import Identifier from "../../../main/scripts/engine/identifier/Identifier.js";
import TexMap from "../../../main/scripts/engine/resources/texture/map/TexMap.js";
import Registries from "../../../main/scripts/engine/registry/Registries.js";
import Registry from "../../../main/scripts/engine/registry/Registry.js";
export default class Textures {
    static register(t, name) {
        return Registry.register(Registries.TEXTURES, t, new Identifier("frogger", name));
    }
}
// Blocks
Textures.BLOCKS = Textures.register(TextureLoader.loadResource(new Identifier("frogger", "blocks")), "blocks");
Textures.BLOCKS_MAP = new TexMap(Textures.BLOCKS).setSubSize(16, 16);
Textures.DIRT = Textures.register(Textures.BLOCKS_MAP.createSub(0, 0), "dirt");
// Entities
Textures.FROG = Textures.register(TextureLoader.loadResource(new Identifier("frogger", "entity/frog")), "frog");
Textures.FROG_MAP = new TexMap(Textures.FROG).setSubSize(16, 16);
Textures.FROG_UP = Textures.register(Textures.FROG_MAP.createSub(0, 0), "frog_up");
Textures.FROG_RIGHT = Textures.register(Textures.FROG_MAP.createSub(1, 0), "frog_right");
Textures.FROG_LEFT = Textures.register(Textures.FROG_MAP.createSub(2, 0), "frog_left");
Textures.FROG_DOWN = Textures.register(Textures.FROG_MAP.createSub(3, 0), "frog_down");
//# sourceMappingURL=Textures.js.map