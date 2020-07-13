import ResourceLoader from "../../../../../main/scripts/engine/resources/ResourceLoader";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier";
import Sound from "./Sound";

export default class SoundLoader extends ResourceLoader {
    public static loadResource(identifier: Identifier): Sound {
        super.loadResource(identifier);

        let audio = new Audio();
        audio.src = `./resources/assets/${identifier.namespace}/sounds/${identifier.name}.ogg`;

        let sound = new Sound(audio);
        sound.IDENTIFIER = identifier;

        // const response =  fetch(`./resources/assets/${identifier.namespace}/sounds/${identifier.name}.ogg`);
        // const arrayBuffer =  response.arrayBuffer();
        // const sound = new Sound(null);

        return sound;
    };
}