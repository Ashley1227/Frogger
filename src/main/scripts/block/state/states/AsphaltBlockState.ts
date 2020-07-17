import BlockState from "../../../engine/block/state/BlockState";
import Random from "../../../engine/math/Random";
import World from "../../../engine/world/World";
import Chunk from "../../../engine/world/chunk/Chunk";
import Vector2 from "../../../engine/math/Vector2";
import EntityTypes from "../../../entity/type/EntityTypes";
import Direction from "../../../engine/math/Direction";
import {client} from "../../../../../client/scripts/client";
import {floor} from "../../../engine/math/math";

export default class AsphaltBlockState extends BlockState {
    randomTick(world: World, chunk: Chunk, worldPosition: Vector2, chunkPosition: Vector2) {
        super.randomTick(world, chunk, worldPosition, chunkPosition);
        if(chunkPosition.x == 0) {
            // if (Random.nextFloat() > 0.95) {
                if (worldPosition.x <= client.camera.getPosition().x || worldPosition.y <= client.camera.getPosition().y)
                    world.spawnEntity(EntityTypes.GRAY_CAR.createState(world, new Vector2(floor(client.camera.getPosition().x - 2), worldPosition.y), Direction.ZERO))
            // }
        }
    }

    clone(): BlockState {
        return new AsphaltBlockState(this.TYPE).setDefaultRenderer(this.RENDERER);
    }
}