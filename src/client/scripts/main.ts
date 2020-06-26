import GameRenderer from "./rendering/GameRenderer.js";

var renderer: GameRenderer = new GameRenderer(
    <HTMLCanvasElement>document.getElementById("canvas")
);
draw();

function draw() {
    renderer.render();
    window.requestAnimationFrame(draw);
}