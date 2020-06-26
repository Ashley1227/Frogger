import World from "./engine/world/World.js";
import Registries from "./engine/registry/Registries.js";
import Block from "./engine/block/Block.js";
import Registry from "./engine/registry/Registry.js";
import Identifier from "./engine/identifier/Identifier.js";
import TextureLoader from "./engine/resources/texture/TextureLoader.js";
export default class Server {
    startServer() {
        var world = new World();
        Registry.register(Registries.BLOCKS, new Block(), new Identifier("frogger", "test"));
        console.log(TextureLoader.loadResource(Identifier.of("frogger:gaming")));
    }
}
//# sourceMappingURL=Server.js.map