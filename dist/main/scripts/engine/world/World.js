import Chunk from "./chunk/Chunk.js";
export default class World {
    constructor(generators) {
        this.chunks = new Map();
        this.generators = generators;
    }
    getChunk(x, y) {
        try {
            return this.chunks.get(x).get(y);
        }
        catch (e) {
            console.debug(`Chunk (${x}, ${y}) does not exist in ${this.IDENTIFIER}...attempting to generate`);
            this.generateChunk(x, y);
        }
    }
    addGenerator(generator) {
        this.generators.push(generator);
        return this;
    }
    addGenerators(generators) {
        this.generators.concat(generators);
        return this;
    }
    generateChunk(x, y) {
        let chunk = new Chunk(this, x, y);
        for (let generator of this.generators) {
            generator.generate(chunk);
        }
        return this.addChunk(chunk);
    }
    addChunk(chunk) {
        this.chunks.get(chunk.x).set(chunk.y, chunk);
        return chunk;
    }
}
//# sourceMappingURL=World.js.map