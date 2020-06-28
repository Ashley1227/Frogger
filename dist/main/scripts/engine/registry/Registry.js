export default class Registry {
    constructor() {
        this._members = new Map();
    }
    setDefault(to) {
        this._default = to;
        return this;
    }
    get(identifier) {
        let t;
        if (typeof identifier == "string")
            t = this._members.get(identifier);
        else
            t = this._members.get(identifier.toString());
        if (t == null) {
            console.warn(`${identifier} does not exist in ${this.IDENTIFIER}. Attempting to use default.`);
            if (this._default == null) {
                console.error(`Default value for ${this.IDENTIFIER} doesn't exist. Method will return null.`);
                return null;
            }
        }
        else
            return t;
    }
    register(item, identifier) {
        this._members.set(identifier.toString(), item);
        return item;
    }
    static register(registry, item, identifier) {
        console.debug(`${identifier} registered in ${registry.IDENTIFIER}`);
        item.IDENTIFIER = identifier;
        registry.register(item, identifier);
        return item;
    }
    static get(registry, identifier) {
        return registry.get(identifier);
    }
}
//# sourceMappingURL=Registry.js.map