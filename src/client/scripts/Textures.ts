import TextureLoader from "./engine/resources/texture/TextureLoader";
import Identifier from "../../main/scripts/engine/identifier/Identifier";
import TexMap from "./engine/resources/texture/map/TexMap";
import Texture from "./engine/resources/texture/Texture";
import Registry from "../../main/scripts/engine/registry/Registry";
import ClientRegistries from "./engine/registry/ClientRegistries";
import Vector2 from "../../main/scripts/engine/math/Vector2";

console.debug("");
console.debug("Textures");
console.debug("==========");
export default class Textures {
    // Texture maps
    static BLOCKS: Texture = Textures.register(TextureLoader.loadResource(new Identifier("frogger", "block/blocks")), "blocks");
    static WATER: Texture = Textures.register(TextureLoader.loadResource(new Identifier("frogger", "block/water")), "water");

    static FROGS: Texture = Textures.register(TextureLoader.loadResource(new Identifier("frogger", "entity/frog")), "frog");
    static CARS: Texture = Textures.register(TextureLoader.loadResource(new Identifier("frogger", "entity/car")), "cars");

    static BLOCKS_MAP: TexMap = new TexMap(Textures.BLOCKS).setSubSize(16, 16);
    static WATER_MAP: TexMap = new TexMap(Textures.WATER).setSubSize(16, 16);

    static FROG_MAP: TexMap = new TexMap(Textures.FROGS).setSubSize(16, 16);
    static CARS_MAP: TexMap = new TexMap(Textures.CARS).setSubSize(32, 16);

    // Blocks
    static DIRT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(0, 0), "dirt");
    static STREAKY_DIRT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(1, 0), "streaky_dirt");
    static WAVY_DIRT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(2, 0), "wavy_dirt");
    static CRACKED_DIRT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(3, 0), "cracked_dirt");

    static WATER_0: Texture = Textures.register(Textures.WATER_MAP.createSub(0, 0), "water_0");

    static GRASS_0: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(4, 0), "grass_0");
    static GRASS_1: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(5, 0), "grass_1");
    static GRASS_2: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(6, 0), "grass_2");
    static GRASS_3: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(7, 0), "grass_3");
    static GRASS_4: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(8, 0), "grass_4");
    static GRASS_5: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(9, 0), "grass_5");

    static RED_FLOWER: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(10, 0), "red_flower");

    static GRASS_LARGE_CORNER_UP_RIGHT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(11, 0), "grass_large_corner_up_right");
    static GRASS_LARGE_CORNER_UP_LEFT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(12, 0), "grass_large_corner_up_left");
    static GRASS_LARGE_CORNER_DOWN_RIGHT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(13, 0), "grass_large_corner_down_right");
    static GRASS_LARGE_CORNER_DOWN_LEFT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(14, 0), "grass_large_corner_down_left");

    static GRASS_UP: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(15, 0), "grass_up");
    static GRASS_RIGHT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(0, 1), "grass_right");
    static GRASS_LEFT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(1, 1), "grass_left");
    static GRASS_DOWN: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(2, 1), "grass_down");

    static GRASS_SMALL_CORNER_UP_RIGHT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(3, 1), "grass_small_corner_up_right");
    static GRASS_SMALL_CORNER_UP_LEFT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(4, 1), "grass_small_corner_up_left");
    static GRASS_SMALL_CORNER_DOWN_RIGHT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(5, 1), "grass_small_corner_down_right");
    static GRASS_SMALL_CORNER_DOWN_LEFT: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(6, 1), "grass_small_corner_down_left");

    static GRAVEL: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(7, 1), "gravel");
    static STONE: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(8, 1), "stone");
    static COBBLESTONE: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(9, 1), "cobblestone");

    static DARK_GRAVEL: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(10, 1), "dark_gravel");
    static DARK_STONE: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(11, 1), "dark_stone");
    static DARK_COBBLESTONE: Texture = Textures.register(Textures.BLOCKS_MAP.createSub(12, 1), "dark_cobblestone");

    // Entities
    static FROG_STATIONARY: Texture = Textures.register(Textures.FROG_MAP.createSub(0, 0), "frog_stationary");
    static FROG_MOVING: Texture = Textures.register(Textures.FROG_MAP.createSpecialSub(0, 16, 16, 20).setWorldSize(new Vector2(1, 1.25)), "frog_moving");

    static BROWN_TRUCK: Texture = Textures.register(Textures.CARS_MAP.createSub(0, 0).setWorldSize(new Vector2(2, 1)), "car_0");
    static RED_CAR: Texture = Textures.register(Textures.CARS_MAP.createSub(0, 1).setWorldSize(new Vector2(2, 1)), "car_1");
    static BLUE_CAR: Texture = Textures.register(Textures.CARS_MAP.createSub(0, 2).setWorldSize(new Vector2(2, 1)), "car_2");
    static GRAY_CAR: Texture = Textures.register(Textures.CARS_MAP.createSub(0, 3).setWorldSize(new Vector2(2, 1)), "car_3");

    public static register(texture: Texture, name: string): Texture {
        return Registry.register(ClientRegistries.TEXTURES, texture, new Identifier("frogger", name));
    }
}