import Registry from "../../main/scripts/engine/registry/Registry";
import ClientRegistries from "./engine/registry/ClientRegistries";
import Identifier from "../../main/scripts/engine/identifier/Identifier";
import Sound from "./engine/resources/sound/Sound";
import SoundLoader from "./engine/resources/sound/SoundLoader";

console.debug("");
console.debug("Sounds");
console.debug("==========");

export default class Sounds {
    public static FROG_HIT_CAR: Sound = Sounds.register(SoundLoader.loadResource(new Identifier("frogger", "entity/frog/hit_car")), "frog_hit_car");

    public static register(sound: Sound, name: string): Sound {
        return Registry.register(ClientRegistries.SOUNDS, sound, new Identifier("frogger", name));
    }
}