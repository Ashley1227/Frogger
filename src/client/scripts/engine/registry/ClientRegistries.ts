import Registry from "../../../../main/scripts/engine/registry/Registry.js";
import {REGISTRIES} from "../../../../main/scripts/engine/registry/Registries.js";
import Texture from "../resources/texture/Texture.js";
import Identifier from "../../../../main/scripts/engine/identifier/Identifier.js";
import Key from "../input/keyboard/Key.js";
import MouseButton from "../input/mouse/MouseButton";

export default class ClientRegistries {
    public static TEXTURES: Registry<Texture> = Registry.register(
        REGISTRIES,
        new Registry<Texture>(),
        new Identifier("frogger","textures")
    );
    public static KEYS: Registry<Key> = Registry.register(
        REGISTRIES,
        new Registry<Key>(),
        new Identifier("frogger","keys")
    );
    public static MOUSE_BUTTONS: Registry<MouseButton> = Registry.register(
        REGISTRIES,
        new Registry<MouseButton>(),
        new Identifier("frogger","mouse_buttons")
    );
}