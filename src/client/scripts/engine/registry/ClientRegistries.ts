import Registry from "../../../../main/scripts/engine/registry/Registry";
import {REGISTRIES} from "../../../../main/scripts/engine/registry/Registries";
import Texture from "../resources/texture/Texture";
import Identifier from "../../../../main/scripts/engine/identifier/Identifier";
import Key from "../input/keyboard/Key";
import MouseButton from "../input/mouse/MouseButton";
import KeyboardControl from "../input/control/KeyboardControl";

console.debug("");
console.debug("Client Registries");
console.debug("==========");
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
    public static KEYBOARD_CONTROLS: Registry<KeyboardControl> = Registry.register(
        REGISTRIES,
        new Registry<KeyboardControl>(),
        new Identifier("frogger","keyboard_controls")
    );
}