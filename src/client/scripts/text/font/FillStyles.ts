import Font from "../../engine/text/font/Font";
import Registry from "../../../../main/scripts/engine/registry/Registry";
import ClientRegistries from "../../engine/registry/ClientRegistries";
import Identifier from "../../../../main/scripts/engine/identifier/Identifier";
import FillStyle from "../../engine/text/font/FillStyle";

console.debug("");
console.debug("Fill Styles");
console.debug("==========");
export default class FillStyles {

    public static WHITE: FillStyle = FillStyles.register(new FillStyle("white"), "white");
    public static BLACK: FillStyle = FillStyles.register(new FillStyle("black"), "black");

    static register<T extends FillStyle>(font: T, name: string): T {
        return <T>Registry.register(ClientRegistries.FILL_STYLES, font, new Identifier("frogger", name));
    }
}