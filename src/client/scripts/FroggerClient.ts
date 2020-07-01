import GameClient from "./engine/GameClient";
import World from "../../main/scripts/engine/world/World";
import GameRenderer from "./rendering/GameRenderer";
import ChunkGenerators from "../../main/scripts/world/chunk/generator/ChunkGenerators";

export default class FroggerClient extends GameClient {
    public static INSTANCE: FroggerClient;

    constructor() {
        super();
    }

    initialise(): GameClient {
        super.initialise();
        return this;
    }
}
FroggerClient.INSTANCE = new FroggerClient().setWorld(
    new World(
            ChunkGenerators.GRASS
    )
);
FroggerClient.INSTANCE.setRenderer(
    new GameRenderer(
        <HTMLCanvasElement>document.getElementById("canvas")
    )
);
FroggerClient.INSTANCE.initialise();
FroggerClient.INSTANCE.render();