export default class Identifier {
    public namespace: string;
    public name: string;

    constructor(namespace: string, name: string) {
        this.namespace = namespace;
        this.name = name;
    }

    equals(object: Object): boolean {
        if(this == object)
            return true;
        if(!(object instanceof Identifier))
            return false;
        let identifier: Identifier = <Identifier>object;
        return identifier.namespace == this.namespace && identifier.name == this.name;
    }

    toString(): string {
        return `${this.namespace}:${this.name}`;
    }

    static of(identifier: string): Identifier {
        let split: string[] = identifier.split(":");
        return new Identifier(split[0], split[1]);
    }
}