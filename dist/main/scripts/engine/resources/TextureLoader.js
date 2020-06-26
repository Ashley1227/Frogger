import ResourceLoader from "./ResourceLoader.js";
export default class TextureLoader extends ResourceLoader {
    static loadResource(identifier) {
        super.loadResource(identifier);
        let image = new HTMLImageElement();
        image.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WmV2JdYezwVolgF_oKPBmAHaEK%26pid%3DApi&f=1";
        return null;
    }
    ;
}
//# sourceMappingURL=TextureLoader.js.map