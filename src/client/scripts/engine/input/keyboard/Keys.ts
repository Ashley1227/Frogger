import Registry from "../../../../../main/scripts/engine/registry/Registry";
import ClientRegistries from "../../registry/ClientRegistries";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier";
import Key from "./Key";

console.debug("");
console.debug("Keys");
console.debug("==========");
export default class Keys {
    public static ZERO: Key = Keys.register(new Key("Digit0"), "zero");
    public static ONE: Key = Keys.register(new Key("Digit1"), "one");
    public static TWO: Key = Keys.register(new Key("Digit2"), "two");
    public static THREE: Key = Keys.register(new Key("Digit3"), "three");
    public static FOUR: Key = Keys.register(new Key("Digit4"), "four");
    public static FIVE: Key = Keys.register(new Key("Digit5"), "five");
    public static SIX: Key = Keys.register(new Key("Digit6"), "six");
    public static SEVEN: Key = Keys.register(new Key("Digit7"), "seven");
    public static EIGHT: Key = Keys.register(new Key("Digit8"), "eight");
    public static NINE: Key = Keys.register(new Key("Digit9"), "nine");

    public static MINUS: Key = Keys.register(new Key("Minus"), "minus");
    public static EQUAL: Key = Keys.register(new Key("Equal"), "equal");
    public static BACKSPACE: Key = Keys.register(new Key("Backspace"), "backspace");

    public static TAB: Key = Keys.register(new Key("Tab"), "tab");
    public static Q: Key = Keys.register(new Key("KeyQ"), "q");
    public static W: Key = Keys.register(new Key("KeyW"), "w");
    public static E: Key = Keys.register(new Key("KeyE"), "e");
    public static R: Key = Keys.register(new Key("KeyR"), "r");
    public static T: Key = Keys.register(new Key("KeyT"), "t");
    public static Y: Key = Keys.register(new Key("KeyY"), "y");
    public static U: Key = Keys.register(new Key("KeyU"), "u");
    public static I: Key = Keys.register(new Key("KeyI"), "i");
    public static O: Key = Keys.register(new Key("KeyO"), "o");
    public static P: Key = Keys.register(new Key("KeyP"), "p");

    public static LEFT_BRACKET: Key = Keys.register(new Key("BracketLeft"), "left_bracket");
    public static RIGHT_BRACKET: Key = Keys.register(new Key("BracketRight"), "right_bracket");
    public static ENTER: Key = Keys.register(new Key("Enter"), "enter");
    public static LCONTROL: Key = Keys.register(new Key("ControlLeft"), "left_control");

    public static A: Key = Keys.register(new Key("KeyA"), "a");
    public static S: Key = Keys.register(new Key("KeyS"), "s");
    public static D: Key = Keys.register(new Key("KeyD"), "d");
    public static F: Key = Keys.register(new Key("KeyF"), "f");
    public static G: Key = Keys.register(new Key("KeyG"), "g");
    public static H: Key = Keys.register(new Key("KeyH"), "h");
    public static J: Key = Keys.register(new Key("KeyJ"), "j");
    public static K: Key = Keys.register(new Key("KeyK"), "k");
    public static L: Key = Keys.register(new Key("KeyL"), "l");

    public static SEMICOLON: Key = Keys.register(new Key("Semicolon"), "semicolon");
    public static QUOTE: Key = Keys.register(new Key("Quote"), "quote");
    public static BACKQUOTE: Key = Keys.register(new Key("Backquote"), "backqote");

    public static LSHIFT: Key = Keys.register(new Key("ShiftLeft"), "left_shift");

    public static BACKSLASH: Key = Keys.register(new Key("Backslash"), "backslash");

    public static Z: Key = Keys.register(new Key("KeyZ"), "z");
    public static X: Key = Keys.register(new Key("KeyX"), "x");
    public static C: Key = Keys.register(new Key("KeyC"), "c");
    public static V: Key = Keys.register(new Key("KeyV"), "v");
    public static B: Key = Keys.register(new Key("KeyB"), "b");
    public static N: Key = Keys.register(new Key("KeyN"), "n");
    public static M: Key = Keys.register(new Key("KeyM"), "m");

    public static COMMA: Key = Keys.register(new Key("Comma"), "comma");
    public static PERIOD: Key = Keys.register(new Key("Period"), "period");
    public static SLASH: Key = Keys.register(new Key("Slash"), "slash");

    public static RSHIFT: Key = Keys.register(new Key("ShiftRight"), "right_shift");

    public static NUMPAD_MULTIPLY: Key = Keys.register(new Key("NumpadMultiply"), "numpad_multiply");

    public static LALT: Key = Keys.register(new Key("AltLeft"), "left_alt");
    public static SPACE: Key = Keys.register(new Key("Space"), "space");
    public static CAPS_LOCK: Key = Keys.register(new Key("CapsLock"), "caps_lock");

    public static F1: Key = Keys.register(new Key("F1"), "f1");
    public static F2: Key = Keys.register(new Key("F2"), "f2");
    public static F3: Key = Keys.register(new Key("F3"), "f3");
    public static F4: Key = Keys.register(new Key("F4"), "f4");
    public static F5: Key = Keys.register(new Key("F5"), "f5");
    public static F6: Key = Keys.register(new Key("F6"), "f6");
    public static F7: Key = Keys.register(new Key("F7"), "f7");
    public static F8: Key = Keys.register(new Key("F8"), "f8");
    public static F9: Key = Keys.register(new Key("F9"), "f9");
    public static F10: Key = Keys.register(new Key("F10"), "f10");

    public static SCROLL_LOCK: Key = Keys.register(new Key("ScrollLock"), "scroll_lock");

    public static NUMPAD_7: Key = Keys.register(new Key("Numpad7"), "numpad_seven");
    public static NUMPAD_8: Key = Keys.register(new Key("Numpad8"), "numpad_eight");
    public static NUMPAD_9: Key = Keys.register(new Key("Numpad9"), "numpad_nine");

    public static NUMPAD_SUBTRACT: Key = Keys.register(new Key("NumpadSubtract"), "numpad_subtract");

    public static NUMPAD_4: Key = Keys.register(new Key("Numpad4"), "numpad_four");
    public static NUMPAD_5: Key = Keys.register(new Key("Numpad5"), "numpad_five");
    public static NUMPAD_6: Key = Keys.register(new Key("Numpad6"), "numpad_six");

    public static NUMPAD_ADD: Key = Keys.register(new Key("NumpadAdd"), "numpad_add");

    public static NUMPAD_1: Key = Keys.register(new Key("Numpad1"), "numpad_one");
    public static NUMPAD_2: Key = Keys.register(new Key("Numpad2"), "numpad_two");
    public static NUMPAD_3: Key = Keys.register(new Key("Numpad3"), "numpad_three");

    public static NUMPAD_0: Key = Keys.register(new Key("Numpad0"), "numpad_zero");

    public static NUMPAD_DECIMAL: Key = Keys.register(new Key("NumpadDecimal"), "numpad_decimal");
    public static INTERNATIONAL_BACKSLASH: Key = Keys.register(new Key("IntlBackslash"), "international_backslash");

    public static F11: Key = Keys.register(new Key("F11"), "f11");
    public static F12: Key = Keys.register(new Key("F12"), "f12");

    public static NUMPAD_EQUAL: Key = Keys.register(new Key("NumpadEqual"), "numpad_equal");

    public static F13: Key = Keys.register(new Key("F13"), "f13");
    public static F14: Key = Keys.register(new Key("F14"), "f14");
    public static F15: Key = Keys.register(new Key("F15"), "f15");
    public static F16: Key = Keys.register(new Key("F16"), "f16");
    public static F17: Key = Keys.register(new Key("F17"), "f17");
    public static F18: Key = Keys.register(new Key("F18"), "f18");
    public static F19: Key = Keys.register(new Key("F19"), "f19");
    public static F20: Key = Keys.register(new Key("F20"), "f20");
    public static F21: Key = Keys.register(new Key("F21"), "f21");
    public static F22: Key = Keys.register(new Key("F22"), "f22");
    public static F23: Key = Keys.register(new Key("F23"), "f23");
    public static F24: Key = Keys.register(new Key("F24"), "f24");

    public static NUMPAD_COMMA: Key = Keys.register(new Key("NumpadComma"), "numpad_comma");

    public static NUMPAD_ENTER: Key = Keys.register(new Key("NumpadEnter"), "numpad_enter");
    public static NUMPAD_DIVIDE: Key = Keys.register(new Key("NumpadDivide"), "numpad_divide");

    public static RCONTROL: Key = Keys.register(new Key("ControlRight"), "right_control");
    public static RALT: Key = Keys.register(new Key("AltRight"), "right_alt");

    public static UP_ARROW: Key = Keys.register(new Key("ArrowUp"), "up_arrow");
    public static DOWN_ARROW: Key = Keys.register(new Key("ArrowDown"), "down_arrow");
    public static LEFT_ARROW: Key = Keys.register(new Key("ArrowLeft"), "left_arrow");
    public static RIGHT_ARROW: Key = Keys.register(new Key("ArrowRight"), "right_arrow");

    public static LMETA: Key = Keys.register(new Key("MetaLeft"), "left_meta");
    public static RMETA: Key = Keys.register(new Key("MetaRight"), "right_meta");

    static register(key: Key, name: string): Key {
        return Registry.register(ClientRegistries.KEYS, key, new Identifier("frogger", name));
    }
}
