import Texture from "./texture/Texture.js";
import Block from "../../../../main/scripts/engine/block/Block.js";
import ClientRegistries from "../registry/ClientRegistries.js";

export default class TextureUtils {
    static getBlockTexture(block: Block): Texture {
        return ClientRegistries.TEXTURES.get(block.SETTINGS.TEXTURE);
    }
}