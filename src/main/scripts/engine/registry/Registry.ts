import Identifier from "../identifier/Identifier.js";
import Identifiable from "../identifier/Identifiable.js";

export default class Registry<T extends Identifiable> implements Identifiable {
    public IDENTIFIER: Identifier;

    private _members: Map<string, T>;
    private _default: T;

    constructor() {
        this._members = new Map<string, T>();
    }

    setDefault(to: T): Registry<T> {
        this._default = to;
        return this;
    }

    get(identifier: Identifier | string): T {
        let t: T;
        if(typeof identifier == "string")
            t = this._members.get(identifier);
        else
            t = this._members.get(identifier.toString());

        if(t == null) {
            console.warn(`${identifier} does not exist in ${this.IDENTIFIER}. Attempting to use default.`);
            if(this._default == null) {
                console.error(`Default value for ${this.IDENTIFIER} doesn't exist. Method will return null.`);
                return null;
            }
        } else return t;
    }

    register(item: T, identifier: Identifier): T {
        this._members.set(identifier.toString(), item);
        return item;
    }

    static register<T extends Identifiable>(registry: Registry<T>, item: T, identifier: Identifier): T {
        console.debug(`${identifier} registered in ${registry.IDENTIFIER}`);

        item.IDENTIFIER = identifier;
        registry.register(item, identifier);
        return item;
    }

    static get<T extends Identifiable>(registry: Registry<T>, identifier: Identifier | string): T {
        return registry.get(identifier);
    }
}