import Sound from "./Sound";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier";
import ClientRegistries from "../../registry/ClientRegistries";

export default class SoundUtils {
    public static getSound(identifier: Identifier): Sound {
        return ClientRegistries.SOUNDS.get(identifier);
    }
}