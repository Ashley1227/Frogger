System.register(["./Registry.js", "../identifier/Identifier.js"], function (exports_1, context_1) {
    "use strict";
    var Registry_js_1, Identifier_js_1, REGISTRIES, Registries;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Registry_js_1_1) {
                Registry_js_1 = Registry_js_1_1;
            },
            function (Identifier_js_1_1) {
                Identifier_js_1 = Identifier_js_1_1;
            }
        ],
        execute: function () {
            exports_1("REGISTRIES", REGISTRIES = new Registry_js_1.default());
            REGISTRIES.IDENTIFIER = new Identifier_js_1.default("frogger", "registries");
            Registries = class Registries {
            };
            exports_1("default", Registries);
            Registries.WORLDS = Registry_js_1.default.register(REGISTRIES, new Registry_js_1.default(), new Identifier_js_1.default("frogger", "worlds"));
            Registries.CHUNK_GENERATORS = Registry_js_1.default.register(REGISTRIES, new Registry_js_1.default(), new Identifier_js_1.default("frogger", "chunk_generators"));
            Registries.BLOCK_TYPES = Registry_js_1.default.register(REGISTRIES, new Registry_js_1.default(), new Identifier_js_1.default("frogger", "blocks"));
        }
    };
});
//# sourceMappingURL=Registries.js.map