import FrogEntityState from "./entity/state/states/FrogEntityState";
import EntityTypes from "./entity/type/EntityTypes";
import Worlds from "./world/Worlds";
import Vector2 from "./engine/math/Vector2";
import Direction from "./engine/math/Direction";
import BlockTypes from "./block/type/BlockTypes";

export var frog: FrogEntityState;

export function initialiseServer() {
    BlockTypes.initialiseClass();
    EntityTypes.initialiseClass();
    frog = <FrogEntityState>(EntityTypes.FROG.createState(Worlds.WORLD, new Vector2(0, 0), new Direction(0)));
    Worlds.WORLD.spawnEntity(frog);
}


// Worlds.WORLD.spawnEntity(EntityTypes.GRAY_CAR.createState(Worlds.WORLD, new Vector2(-10, 0), new Direction(0)));