import Registry from "../../../../../main/scripts/engine/registry/Registry.js";
import ClientRegistries from "../../registry/ClientRegistries.js";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier.js";
import MouseButton from "./MouseButton.js";

export default class MouseButtons {
    public static LEFT: MouseButton = MouseButtons.register(new MouseButton(0), "left");
    public static RIGHT: MouseButton = MouseButtons.register(new MouseButton(1), "right");

    public static MIDDLE: MouseButton = MouseButtons.register(new MouseButton(2), "middle");

    static register(mouseButton: MouseButton, name: string): MouseButton {
        return Registry.register(ClientRegistries.MOUSE_BUTTONS, mouseButton, new Identifier("frogger", name));
    }
}
