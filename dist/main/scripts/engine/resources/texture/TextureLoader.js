import ResourceLoader from "../ResourceLoader.js";
import Texture from "./Texture.js";
export default class TextureLoader extends ResourceLoader {
    static loadResource(identifier) {
        super.loadResource(identifier);
        let image = new Image();
        image.src = `./client/resources/assets/${identifier.namespace}/textures/${identifier.name}.png`;
        let texture = new Texture(image);
        texture.setIdentifier(identifier);
        return texture;
    }
    ;
}
//# sourceMappingURL=TextureLoader.js.map