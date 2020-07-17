import Chunk from "./chunk/Chunk";
import Identifiable from "../identifier/Identifiable";
import Identifier from "../identifier/Identifier";
import Vector2 from "../math/Vector2";
import HashMap from "../util/HashMap";
import EntityState from "../entity/state/EntityState";
import WorldSettings from "./WorldSettings";
import {client} from "../../../../client/scripts/client";

export default class World implements Identifiable {
    public IDENTIFIER: Identifier;
    public settings: WorldSettings;

    public ms: number = 0;
    public cTPS: number = 0;
    public tps: number = 0;

    public ticks: number;

    public chunks: HashMap<Vector2, Chunk> = new HashMap<Vector2, Chunk>();
    public entities: EntityState[] = [];

    public scheduledTicks: { (): void }[] = [];
    public lastTick: number;

    constructor(settings: WorldSettings) {
        this.settings = settings;
    }

    initialise(): void {
        this.ticks = 0;
        setInterval(() => this.tick(), this.settings.TICK_INTERVAL);
        setInterval(() => this.countTicks(), 1000);
    }

    tick(): void {
        this.lastTick = Date.now();
        client.tick();
        for (let i = this.entities.length - 1; i > -1; i--) {
            let entity = this.entities[i];
            entity.tick();
            if (entity.shouldBeRemoved) {
                this.entities.splice(i, 1);
            }
        }
        for (let [position, chunk] of this.chunks) {
            if (chunk.shouldUnload) {
                this.removeChunk(position);
            }
            chunk.tick();
        }
        for (let i = 0; i < this.scheduledTicks.length; i++) {
            this.scheduledTicks.shift()();
        }
        this.ticks++;
        this.cTPS++;
        this.ms = Date.now() - this.lastTick;
    }

    scheduleTick(tick: { (): void }): void {
        this.scheduledTicks.push(tick);
    }

    countTicks(): void {
        this.tps = this.cTPS;
        this.cTPS = 0;
    }

    spawnEntity(state: EntityState): World {
        this.addEntity(state);
        return this;
    }

    addEntity(entity: EntityState): World {
        this.entities.push(entity);
        return this;
    }

    public getChunk(position: Vector2): Chunk {
        let c: Chunk = this.chunks.get(position);
        if (c) {
            return c;
        } else {
            console.debug(`Chunk (${position.x}, ${position.y}) does not exist in ${this.IDENTIFIER}...attempting to generate`);
            return this.generateChunk(position);
        }
    }

    public getChunkXY(x: number, y: number): Chunk {
        return this.getChunk(new Vector2(x, y));
    }

    isChunk(position: Vector2): boolean {
        return !!this.chunks.get(position);
    }

    isChunkWorldCoords(position: Vector2): boolean {
        return this.isChunk(position.divide(Chunk.SIZE).floor());
    }

    public removeChunk(position: Vector2): boolean {
        return this.chunks.delete(position);
    }

    public removeChunkWorldCoords(position: Vector2): boolean {
        return this.removeChunk(position.divide(Chunk.SIZE).floor());
    }

    getBlockState(position: Vector2) {
        return this.getChunk(position.divide(Chunk.SIZE).floor()).getBlockState(position);
    }

    generateChunk(position: Vector2): Chunk {
        let chunk: Chunk = new Chunk(this, position);
        for (let generator of this.settings.generators) {
            generator.generate(chunk);
        }
        return this.addChunk(chunk);
    }

    addChunk(chunk: Chunk): Chunk {
        this.chunks.set(chunk.position, chunk);
        chunk.updateAll();
        return chunk;
    }
}