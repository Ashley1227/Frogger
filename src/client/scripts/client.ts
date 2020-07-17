import FroggerClient from "./FroggerClient";

export var client: FroggerClient;

export function initialiseClient() {
    client = new FroggerClient();
    client.initialise();
    client.render();
}
