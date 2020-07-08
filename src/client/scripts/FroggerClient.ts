import GameClient from "./engine/GameClient";

export default class FroggerClient extends GameClient {
    constructor() {
        super();
    }

    initialise(): GameClient {
        super.initialise();
        return this;
    }
}