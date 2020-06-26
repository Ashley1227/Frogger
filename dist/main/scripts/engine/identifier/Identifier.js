export default class Identifier {
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
}
//# sourceMappingURL=Identifier.js.map