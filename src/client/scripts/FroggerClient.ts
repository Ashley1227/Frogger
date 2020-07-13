import GameClient from "./engine/GameClient";
import Vector2 from "../../main/scripts/engine/math/Vector2";
import Chunk from "../../main/scripts/engine/world/chunk/Chunk";

export default class FroggerClient extends GameClient {
    constructor() {
        super();
    }

    render(): GameClient {
        super.render();
        let tl: Vector2 = this.camera.getPosition().divide(Chunk.size).floor().subtract(new Vector2(1, 1));
        let br: Vector2 = this.camera.getPosition().add(this.camera.viewort).divide(Chunk.size).ceil().add(new Vector2(1, 1));

        for (let x = tl.x; x < br.x; x++) {
            for (let y = tl.y; y < br.y; y++) {
                if(x == tl.x || x == br.x - 1 || y == tl.y || y == br.y - 1) {
                    this.world.removeChunk(new Vector2(x, y));
                } else {
                    this.world.getChunkXY(x, y);
                }
            }
        }
        return this;
    }

    initialise(): GameClient {
        super.initialise();
        return this;
    }
}