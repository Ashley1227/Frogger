export default class KeyboardInput {
    public static keysDown = [];

    static initialise() {
        document.addEventListener("keydown", function(event) {
            KeyboardInput.keysDown[event.code] = true;
        }, false);
        document.addEventListener("keyup", function(event) {
            KeyboardInput.keysDown[event.code] = false;
        }, false);
    }
}