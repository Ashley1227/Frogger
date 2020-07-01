System.register(["../identifier/Identifier.js"], function (exports_1, context_1) {
    "use strict";
    var Identifier_js_1, Block;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Identifier_js_1_1) {
                Identifier_js_1 = Identifier_js_1_1;
            }
        ],
        execute: function () {
            Block = class Block {
                constructor(settings) {
                    this.SETTINGS = settings;
                }
                getIdentifier() {
                    return this.IDENTIFIER;
                }
                setIdentifier(identifier) {
                    if (typeof identifier == "string")
                        this.IDENTIFIER = Identifier_js_1.default.of(identifier);
                    else
                        this.IDENTIFIER = identifier;
                    return this;
                }
            };
            exports_1("default", Block);
        }
    };
});
//# sourceMappingURL=Block.js.map