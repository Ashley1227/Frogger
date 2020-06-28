import Chunk from "./chunk/Chunk.js";
import Identifiable from "../identifier/Identifiable.js";
import Identifier from "../identifier/Identifier.js";
import ChunkGenerator from "./chunk/generator/ChunkGenerator.js";

export default class World implements Identifiable {
    public IDENTIFIER: Identifier;
    public chunks: Map<number, Map<number, Chunk>> = new Map<number, Map<number, Chunk>>();

    public generators: ChunkGenerator[];

    constructor(generators: ChunkGenerator[]) {
        this.generators = generators;
    }
    public getChunk(x: number, y: number): Chunk {
        try {
            return this.chunks.get(x).get(y);
        } catch(e) {
            console.debug(`Chunk (${x}, ${y}) does not exist in ${this.IDENTIFIER}...attempting to generate`);
            this.generateChunk(x, y);
        }
    }
    addGenerator(generator: ChunkGenerator): World {
        this.generators.push(generator);
        return this;
    }
    addGenerators(generators: ChunkGenerator[]): World {
        this.generators.concat(generators);
        return this;
    }
    generateChunk(x: number, y: number): Chunk {
        let chunk: Chunk = new Chunk(this, x, y);
        for(let generator of this.generators) {
            generator.generate(chunk);
        }
        return this.addChunk(chunk);
    }
    addChunk(chunk: Chunk): Chunk {
        this.chunks.get(chunk.x).set(chunk.y, chunk);
        return chunk;
    }
}