import Chunk from "./chunk/Chunk";
import Identifiable from "../identifier/Identifiable";
import Identifier from "../identifier/Identifier";
import ChunkGenerator from "./chunk/generator/ChunkGenerator";
import Vector2 from "../math/Vector2";

export default class World implements Identifiable {
    public IDENTIFIER: Identifier;
    public chunks: Map<Vector2, Chunk> = new Map<Vector2, Chunk>();

    public generators: ChunkGenerator[];

    constructor(...generators: ChunkGenerator[]) {
        this.generators = generators;
    }
    public getChunk(position: Vector2): Chunk {
        try {
            return this.chunks.get(position);
        } catch(e) {
            console.debug(`Chunk (${position.x}, ${position.y}) does not exist in ${this.IDENTIFIER}...attempting to generate`);
            this.generateChunk(position);
        }
    }
    public getChunkXY(x: number, y: number): Chunk {
        return this.getChunk(new Vector2(x, y));
    }
    addGenerator(generator: ChunkGenerator): World {
        this.generators.push(generator);
        return this;
    }
    addGenerators(generators: ChunkGenerator[]): World {
        this.generators.concat(generators);
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