import Chunk from "./chunk/Chunk";
import Identifiable from "../identifier/Identifiable";
import Identifier from "../identifier/Identifier";
import ChunkGenerator from "./chunk/generator/ChunkGenerator";
import Vector2 from "../math/Vector2";
import HashMap from "../util/HashMap";
import EntityState from "../entity/state/EntityState";

export default class World implements Identifiable {
    public static TICK_INTERVAL = 50;
    public IDENTIFIER: Identifier;
    public ms: number = 0;
    public cTPS: number = 0;
    public tps: number = 0;

    public ticks: number;

    public chunks: HashMap<Vector2, Chunk> = new HashMap<Vector2, Chunk>();
    public entities: EntityState[] = [];

    public generators: ChunkGenerator[] = [];

    public lastTick: number;

    constructor(...generators: ChunkGenerator[]) {
        this.generators = generators;
    }

    initialise(): void {
        this.ticks = 0;
        setInterval(() => this.tick(), World.TICK_INTERVAL);
        setInterval(() => this.countTicks(), 1000);
    }

    tick(): void {
        this.lastTick = Date.now();
        for(let entity of this.entities) {
            entity.tick();
        }
        this.ticks++;
        this.cTPS++;
        this.ms = Date.now() - this.lastTick;
    }

    countTicks(): void {
        this.tps = this.cTPS;
        this.cTPS = 0;
    }

    spawnEntity(entity: EntityState): World {
        this.addEntity(entity);
        return this;
    }

    addEntity(entity: EntityState): World {
        this.entities.push(entity);
        return this;
    }

    public getChunk(position: Vector2): Chunk {
        let c: Chunk = this.chunks.get(position);
        if(c) {
            return c;
        } else {
            console.debug(`Chunk (${position.x}, ${position.y}) does not exist in ${this.IDENTIFIER}...attempting to generate`);
            return this.generateChunk(position);
        }
    }
    public getChunkXY(x: number, y: number): Chunk {
        return this.getChunk(new Vector2(x, y));
    }
    addGenerator(generator: ChunkGenerator): World {
        this.generators.push(generator);
        return this;
    }
    addGenerators(...generators: ChunkGenerator[]): World {
        this.generators = this.generators.concat(generators);
        return this;
    }
    generateChunk(position: Vector2): Chunk {
        let chunk: Chunk = new Chunk(this, position);
        for(let generator of this.generators) {
            generator.generate(chunk);
        }
        return this.addChunk(chunk);
    }
    addChunk(chunk: Chunk): Chunk {
        this.chunks.set(chunk.position, chunk);
        return chunk;
    }
}