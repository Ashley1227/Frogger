export default class MouseInput {
    public static buttons = [];

    public static mouseX = 0;
    public static mouseY = 0;

    static initialise() {
        document.addEventListener("mousedown", function(event) {
            MouseInput.buttons[event.button] = true;
        }, false);
        document.addEventListener("mousedown", function(event) {
            MouseInput.buttons[event.button] = true;
        }, false);
        document.addEventListener("mousemove", function(event) {
            MouseInput.mouseX = event.clientX;
            MouseInput.mouseY = event.clientY;
        }, false);
    }
}