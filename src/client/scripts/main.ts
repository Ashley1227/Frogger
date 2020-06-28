import GameRenderer from "./engine/rendering/GameRenderer.js";
import KeyboardInput from "./engine/input/keyboard/KeyboardInput.js";
import MouseInput from "./engine/input/mouse/MouseInput.js";

var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
var renderer: GameRenderer = new GameRenderer(
    canvas
);

function render() {
    renderer.render();
    window.requestAnimationFrame(render);
}
render();

KeyboardInput.initialise();
MouseInput.initialise();