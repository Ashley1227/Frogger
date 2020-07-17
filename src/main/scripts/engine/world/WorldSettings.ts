import ChunkGenerator from "./chunk/generator/ChunkGenerator";
import Random from "../math/Random";

export default class WorldSettings {
    public readonly SEED: number;
    public TICK_INTERVAL: number = 50;
    public randomTickSpeed: number = 3;
    public generators: ChunkGenerator[] = [];

    constructor(seed?: number) {
        this.SEED = seed ? seed : Random.generateRandomState();
    }

    addGenerator(generator: ChunkGenerator): WorldSettings {
        this.generators.push(generator);
        return this;
    }
    addGenerators(...generators: ChunkGenerator[]): WorldSettings {
        this.generators = this.generators.concat(generators);
        return this;
    }
}