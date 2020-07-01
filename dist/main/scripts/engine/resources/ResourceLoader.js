System.register([], function (exports_1, context_1) {
    "use strict";
    var ResourceLoader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ResourceLoader = class ResourceLoader {
                static loadResource(identifier) {
                    this._amount++;
                    return null;
                }
                ;
                static isDone() {
                    return this._amount < 1;
                }
            };
            exports_1("default", ResourceLoader);
            ResourceLoader._amount = 0;
        }
    };
});
//# sourceMappingURL=ResourceLoader.js.map