import FroggerClient from "./FroggerClient";
import Renderers from "./rendering/Renderers";
import Worlds from "../../main/scripts/world/Worlds";
import Vector2 from "../../main/scripts/engine/math/Vector2";
import EntityTypes from "../../main/scripts/entity/type/EntityTypes";
import Direction from "../../main/scripts/engine/math/Direction";

let CLIENT: FroggerClient = new FroggerClient();
CLIENT.setWorld(Worlds.WORLD);
CLIENT.setRenderer(Renderers.GAME_RENDERER);
CLIENT.initialise();
CLIENT.render();

Worlds.WORLD.generateChunk(new Vector2(0, 0))
Worlds.WORLD.generateChunk(new Vector2(1, 0))
Worlds.WORLD.generateChunk(new Vector2(0, 1))
Worlds.WORLD.generateChunk(new Vector2(1, 1))

for(let i = 0; i < 1; i++)
    Worlds.WORLD.spawnEntity(EntityTypes.FROG.createState(Worlds.WORLD, new Vector2(16, 16), new Direction(0)));

export {CLIENT};