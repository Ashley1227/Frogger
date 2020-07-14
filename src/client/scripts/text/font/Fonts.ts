
import Font from "../../engine/text/font/Font";
import ClientRegistries from "../../engine/registry/ClientRegistries";
import Identifier from "../../../../main/scripts/engine/identifier/Identifier";
import Registry from "../../../../main/scripts/engine/registry/Registry";

console.debug("");
console.debug("Fonts");
console.debug("==========");
export default class Fonts {
    public static HELVETICA: Font = Fonts.register(
        new Font("Helvetica Neue"),
        "helvetica"
    );

    static register<T extends Font>(font: T, name: string): T {
        return <T>Registry.register(ClientRegistries.FONTS, font, new Identifier("frogger", name));
    }
}