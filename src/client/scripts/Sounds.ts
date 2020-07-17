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

    //Credit to originaljun on freesound https://freesound.org/people/orginaljun/sounds/149803/

    public static GRASS_STEP0: Sound = Sounds.register(SoundLoader.loadResource(new Identifier("frogger", "block/grass/step/step0")), "grass_step0");
    public static GRASS_STEP1: Sound = Sounds.register(SoundLoader.loadResource(new Identifier("frogger", "block/grass/step/step1")), "grass_step1");
    public static GRASS_STEP2: Sound = Sounds.register(SoundLoader.loadResource(new Identifier("frogger", "block/grass/step/step2")), "grass_step2");
    public static GRASS_STEP3: Sound = Sounds.register(SoundLoader.loadResource(new Identifier("frogger", "block/grass/step/step3")), "grass_step3");

    public static GRASS_STEP: Sound = Sounds.register(new Sound(Sounds.GRASS_STEP0, Sounds.GRASS_STEP1, Sounds.GRASS_STEP2), "grass_step");

    public static register(sound: Sound, name: string): Sound {
        return Registry.register(ClientRegistries.SOUNDS, sound, new Identifier("frogger", name));
    }
}