import GameClient from "./engine/GameClient";
import Vector2 from "../../main/scripts/engine/math/Vector2";
import Chunk from "../../main/scripts/engine/world/chunk/Chunk";
import Worlds from "../../main/scripts/world/Worlds";
import FollowEntityCamera from "./engine/rendering/camera/FollowEntityCamera";
import {frog} from "../../main/scripts/server";
import Renderers from "./rendering/Renderers";

export default class FroggerClient extends GameClient {
    constructor() {
        super();
    }

    tick(): FroggerClient {
        super.tick();
        let tl: Vector2 = this.camera.getPosition().divide(Chunk.SIZE).floor();
        let br: Vector2 = this.camera.getPosition().add(this.camera.viewort).divide(Chunk.SIZE).ceil();

        for (let x = tl.x; x < br.x; x++) {
            for (let y = tl.y; y < br.y; y++) {
                this.world.getChunkXY(x, y).shouldUnload = false;
            }
        }
        return this;
    }
    render(): GameClient {
        super.render();
        return this;
    }

    initialise(): GameClient {
        this.setWorld(Worlds.WORLD);
        this.setCamera(new FollowEntityCamera(frog));
        this.setRenderer(Renderers.GAME_RENDERER);

        super.initialise();
        return this;
    }
}