System.register(["../engine/block/Block.js", "../engine/registry/Registries.js", "../engine/registry/Registry.js", "../engine/identifier/Identifier.js", "../engine/block/BlockSettings.js"], function (exports_1, context_1) {
    "use strict";
    var Block_js_1, Registries_js_1, Registry_js_1, Identifier_js_1, BlockSettings_js_1, Blocks;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Block_js_1_1) {
                Block_js_1 = Block_js_1_1;
            },
            function (Registries_js_1_1) {
                Registries_js_1 = Registries_js_1_1;
            },
            function (Registry_js_1_1) {
                Registry_js_1 = Registry_js_1_1;
            },
            function (Identifier_js_1_1) {
                Identifier_js_1 = Identifier_js_1_1;
            },
            function (BlockSettings_js_1_1) {
                BlockSettings_js_1 = BlockSettings_js_1_1;
            }
        ],
        execute: function () {
            Blocks = class Blocks {
                static register(block, name) {
                    return Registry_js_1.default.register(Registries_js_1.default.BLOCKS, block, new Identifier_js_1.default("frogger", name));
                }
            };
            exports_1("default", Blocks);
            Blocks.DIRT = Blocks.register(new Block_js_1.default(new BlockSettings_js_1.default()
                .texture(new Identifier_js_1.default("frogger", "dirt"))), "dirt");
            Blocks.GRASS = Blocks.register(new Block_js_1.default(new BlockSettings_js_1.default()
                .texture(new Identifier_js_1.default("frogger", "grass"))), "grass");
        }
    };
});
//# sourceMappingURL=Blocks.js.map