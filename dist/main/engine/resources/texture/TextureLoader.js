import ResourceLoader from "../ResourceLoader.js";
import Texture from "./Texture.js";
export default class TextureLoader extends ResourceLoader {
    static loadResource(identifier) {
        super.loadResource(identifier);
        let image = new Image();
        image.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WmV2JdYezwVolgF_oKPBmAHaEK%26pid%3DApi&f=1";
        return new Texture(image);
    }
    ;
}
//# sourceMappingURL=TextureLoader.js.map