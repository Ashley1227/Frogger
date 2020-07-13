import FroggerClient from "./FroggerClient";
import Renderers from "./rendering/Renderers";
import Worlds from "../../main/scripts/world/Worlds";
import Vector2 from "../../main/scripts/engine/math/Vector2";
import EntityTypes from "../../main/scripts/entity/type/EntityTypes";
import Direction from "../../main/scripts/engine/math/Direction";
import FollowEntityCamera from "./engine/rendering/camera/FollowEntityCamera";
import FrogEntityState from "../../main/scripts/entity/state/states/FrogEntityState";
import AxisAlignedBoundingBox from "../../main/scripts/engine/math/AxisAlignedBoundingBox";
import Sounds from "./Sounds";
import Random from "../../main/scripts/engine/math/Random";

export var client: FroggerClient = new FroggerClient();
client.setWorld(Worlds.WORLD);
export var frog: FrogEntityState = <FrogEntityState>EntityTypes.FROG.createState(Worlds.WORLD, new Vector2(0, 0), new Direction(0));
client.world.spawnEntity(frog);

client.setCamera(new FollowEntityCamera(frog));
client.setRenderer(Renderers.GAME_RENDERER);
client.initialise();
client.render();

console.log(
    new AxisAlignedBoundingBox(new Vector2(0, 0), new Vector2(3, 3))
        .intersects(
            new AxisAlignedBoundingBox(new Vector2(20, 20), new Vector2(2, 2))
        )
);

console.log(
    new AxisAlignedBoundingBox(new Vector2(0, 0), new Vector2(1, 1))
        .intersects(
            new AxisAlignedBoundingBox(new Vector2(0.5, 0.5), new Vector2(1, 1))
        )
);
// for(let i = 0; i < 30; i++)
client.world.spawnEntity(EntityTypes.GRAY_CAR.createState(client.world, new Vector2(-10, 0), new Direction(0)));

let audioContext: AudioContext = new AudioContext();
let mediaElementSource: MediaElementAudioSourceNode = audioContext.createMediaElementSource(Sounds.FROG_HIT_CAR.audio[0]);
let stereoPanner: StereoPannerNode = new StereoPannerNode(audioContext);

var gain: GainNode = audioContext.createGain();
var finish: AudioDestinationNode = audioContext.destination;

gain.gain.value = 0.1;

stereoPanner.pan.value = 0.5;

mediaElementSource.connect(gain).connect(stereoPanner).connect(finish);

setInterval(() => {
    mediaElementSource.mediaElement.play();
}, 1000);