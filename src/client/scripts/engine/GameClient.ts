import KeyboardInput from "./input/keyboard/KeyboardInput";
import MouseInput from "./input/mouse/MouseInput";
import Renderer from "./rendering/renderer/Renderer";
import World from "../../../main/scripts/engine/world/World";

export default class GameClient {
    public renderer: Renderer;
    public world: World;

    constructor() {
    }
    setRenderer(renderer: Renderer): GameClient {
        this.renderer = renderer;
        return this;
    }
    setWorld(world: World): GameClient {
        this.world = world
        return this;
    }
    render(): GameClient {
        this.renderer.render();
        window.requestAnimationFrame(() => this.render());
        return this;
    }
    initialise(): GameClient {
        KeyboardInput.initialise();
        MouseInput.initialise();
        this.world.initialise();

        return this;
    }
}