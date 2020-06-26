import Registry from "./Registry.js";
import Identifier from "../identifier/Identifier.js";
import Block from "../block/Block.js";
import Texture from "../resources/texture/Texture.js";

export var REGISTRIES: Registry<Registry<any>> = new Registry<Registry<any>>();
REGISTRIES.setIdentifier(new Identifier("frogger","registries"));
export default class Registries {

    public static TEXTURES: Registry<Texture> = Registry.register(
        REGISTRIES,
        new Registry<Texture>(),
        new Identifier("frogger","textures")
    );
    public static BLOCKS: Registry<Block> = Registry.register(
        REGISTRIES,
        new Registry<Block>(),
        new Identifier("frogger","blocks")
    );
}
