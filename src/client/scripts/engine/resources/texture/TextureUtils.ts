import Texture from "./Texture";
import ClientRegistries from "../../registry/ClientRegistries";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier";

export default class TextureUtils {
    public static getTexture(identifier: Identifier): Texture {
        return ClientRegistries.TEXTURES.get(identifier);
    }
}