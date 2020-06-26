import GameRenderer from "./rendering/GameRenderer.js";
var renderer = new GameRenderer(document.getElementById("canvas"));
draw();
function draw() {
    renderer.render();
    window.requestAnimationFrame(draw);
}
//# sourceMappingURL=main.js.map