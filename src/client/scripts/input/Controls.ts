import Key from "../engine/input/keyboard/Key";
import Keys from "../engine/input/keyboard/Keys";
import Registry from "../../../main/scripts/engine/registry/Registry";
import ClientRegistries from "../engine/registry/ClientRegistries";
import Identifier from "../../../main/scripts/engine/identifier/Identifier";
import KeyboardControl from "../engine/input/control/KeyboardControl";

console.debug("");
console.debug("Controls");
console.debug("==========");
export default class Controls {
    public static MOVE_UP: KeyboardControl = Controls.registerKeyboard(new KeyboardControl(Keys.W), "move_up");
    public static MOVE_DOWN: KeyboardControl = Controls.registerKeyboard(new KeyboardControl(Keys.S), "move_down");
    public static MOVE_LEFT: KeyboardControl = Controls.registerKeyboard(new KeyboardControl(Keys.A), "move_left");
    public static MOVE_RIGHT: KeyboardControl = Controls.registerKeyboard(new KeyboardControl(Keys.D), "move_right");

    public static DEBUG_TOGGLE: KeyboardControl = Controls.registerKeyboard(new KeyboardControl(Keys.F3), "debug");

    static registerKeyboard(control: KeyboardControl, name: string): KeyboardControl {
        return Registry.register(ClientRegistries.KEYBOARD_CONTROLS, control, new Identifier("frogger", name));
    }
}