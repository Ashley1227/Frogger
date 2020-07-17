import Resource from "../../../../../main/scripts/engine/resources/Resource";
import Random from "../../../../../main/scripts/engine/math/Random";

export default class Sound extends Resource {
    public context: AudioContext;
    public audio: (Sound | HTMLAudioElement)[];

    public constructor(...audio: (HTMLAudioElement | Sound)[]) {
        super();
        this.audio = audio;
    }

    public setContext(context: AudioContext): Sound {
        this.context = context;
        return this;
    }

    public play(): void {
        Random.choice(this.audio).play();
    }
}