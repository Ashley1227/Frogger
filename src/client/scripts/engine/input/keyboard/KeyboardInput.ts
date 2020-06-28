export default class KeyboardInput {
    public static keys = [];

    static initialise() {
        document.addEventListener("keydown", function(event) {
            KeyboardInput.keys[event.code] = true;
        }, false);
        document.addEventListener("keyup", function(event) {
            KeyboardInput.keys[event.code] = false;
        }, false);
    }
}