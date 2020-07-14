import Registry from "../../../../main/scripts/engine/registry/Registry";
import {REGISTRIES} from "../../../../main/scripts/engine/registry/Registries";
import Texture from "../resources/texture/Texture";
import Identifier from "../../../../main/scripts/engine/identifier/Identifier";
import Key from "../input/keyboard/Key";
import MouseButton from "../input/mouse/MouseButton";
import KeyboardControl from "../input/control/KeyboardControl";
import Renderer from "../rendering/renderer/Renderer";
import Font from "../text/font/Font";
import FillStyle from "../text/font/FillStyle";
import Sound from "../resources/sound/Sound";

console.debug("");
console.debug("Client Registries");
console.debug("==========");
export default class ClientRegistries {
    public static TEXTURES: Registry<Texture> = Registry.register(
        REGISTRIES,
        new Registry<Texture>(),
        new Identifier("frogger","textures")
    );
    public static SOUNDS: Registry<Sound> = Registry.register(
        REGISTRIES,
        new Registry<Sound>(),
        new Identifier("frogger","sounds")
    );
    public static RENDERERS: Registry<Renderer> = Registry.register(
        REGISTRIES,
        new Registry<Renderer>(),
        new Identifier("frogger","renderers")
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
    public static FONTS: Registry<Font> = Registry.register(
        REGISTRIES,
        new Registry<Font>(),
        new Identifier("frogger","fonts")
    );
    public static FILL_STYLES: Registry<FillStyle> = Registry.register(
        REGISTRIES,
        new Registry<FillStyle>(),
        new Identifier("frogger","fill_styles")
    );
}