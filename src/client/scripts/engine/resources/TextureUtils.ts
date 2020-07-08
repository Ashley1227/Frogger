import Texture from "./texture/Texture";
import BlockType from "../../../../main/scripts/engine/block/type/BlockType";
import ClientRegistries from "../registry/ClientRegistries";
import Identifier from "../../../../main/scripts/engine/identifier/Identifier";

export default class TextureUtils {
    static getTexture(identifier: Identifier): Texture {
        return ClientRegistries.TEXTURES.get(identifier);
    }
    static getBlockTexture(block: BlockType): Texture {
        // return ClientRegistries.TEXTURES.get(block.SETTINGS.TEXTURE);
        return null;
    }
}