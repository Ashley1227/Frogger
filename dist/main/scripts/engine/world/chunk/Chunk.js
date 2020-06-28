export default class Chunk {
    constructor(world, x, y) {
        this.world = world;
        this.x = x;
        this.y = y;
    }
    fillWith(block) {
        for (let y = 0; y < Chunk.height; y++) {
            for (let x = 0; x < Chunk.width; x++) {
                this.blocks[x][y] = block;
            }
        }
        return this;
    }
}
Chunk.width = 16;
Chunk.height = 16;
//# sourceMappingURL=Chunk.js.map