import Registry from "../../main/scripts/engine/registry/Registry";
import ClientRegistries from "./engine/registry/ClientRegistries";
import Identifier from "../../main/scripts/engine/identifier/Identifier";
import Sound from "./engine/resources/sound/Sound";
import SoundLoader from "./engine/resources/sound/SoundLoader";
import SoundSource from "./engine/sound/source/SoundSource";

console.debug("");
console.debug("Sounds");
console.debug("==========");

export default class Sounds {
    public static CONTEXT: AudioContext = new AudioContext();
    public static DEFAULT_SOURCE: SoundSource = new SoundSource();

    public static FROG_HIT_CAR: Sound = Sounds.register(SoundLoader.loadResource(new Identifier("frogger", "entity/frog/hit_car")).setContext(Sounds.CONTEXT), "frog_hit_car");

    public static register(sound: Sound, name: string): Sound {
        return Registry.register(ClientRegistries.SOUNDS, sound, new Identifier("frogger", name));
    }
}