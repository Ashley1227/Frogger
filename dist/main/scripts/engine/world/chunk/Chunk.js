System.register([], function (exports_1, context_1) {
    "use strict";
    var Chunk;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Chunk = class Chunk {
                constructor(world, x, y) {
                    this.WORLD = world;
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
            };
            exports_1("default", Chunk);
            Chunk.width = 16;
            Chunk.height = 16;
        }
    };
});
//# sourceMappingURL=Chunk.js.map