export class Registry {
    constructor() {
    }
    setDefault(to) {
        this._default = to;
        return this;
    }
    get(identifier) {
        return this._members.get(identifier);
    }
}
//# sourceMappingURL=Registry.js.map