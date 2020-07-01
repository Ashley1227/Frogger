System.register([], function (exports_1, context_1) {
    "use strict";
    var Identifier;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Identifier = class Identifier {
                constructor(namespace, name) {
                    this.namespace = namespace;
                    this.name = name;
                }
                equals(object) {
                    if (this == object)
                        return true;
                    if (!(object instanceof Identifier))
                        return false;
                    let identifier = object;
                    return identifier.namespace == this.namespace && identifier.name == this.name;
                }
                toString() {
                    return `${this.namespace}:${this.name}`;
                }
                static of(identifier) {
                    let split = identifier.split(":");
                    return new Identifier(split[0], split[1]);
                }
            };
            exports_1("default", Identifier);
        }
    };
});
//# sourceMappingURL=Identifier.js.map