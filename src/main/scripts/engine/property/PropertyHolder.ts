import Property from "./Property";

export default class PropertyHolder<T> {
    public PROPERTIES: Property<T>[];

    constructor() {
        this.PROPERTIES = [];
    }

    addProperty(property: Property<T>): void {
        this.PROPERTIES.push(property);
    }
}