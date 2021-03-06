import ResourceLoader from "../../../../../main/scripts/engine/resources/ResourceLoader";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier";
import Texture from "./Texture";

export default class TextureLoader extends ResourceLoader {
    static loadResource(identifier: Identifier): Texture {
        super.loadResource(identifier);

        let image = new Image();
        image.src = `./resources/assets/${identifier.namespace}/textures/${identifier.name}.png`;

        let texture = new Texture(image);
        texture.IDENTIFIER = identifier;

        return texture;
    };
}