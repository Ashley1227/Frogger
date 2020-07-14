import Identifiable from "../identifier/Identifiable";
import Identifier from "../identifier/Identifier";

export default class Tag<T extends Identifiable> implements Identifiable {
    public IDENTIFIER: Identifier;

    public items: T[];

    public constructor(...items: T[]) {
        this.items = items;
    }

    public addItem(item: T): Tag<T> {
        this.items.push(item);
        return this;
    }
    addTag(tag: Tag<T>): Tag<T> {
        this.items = this.items.concat(tag.items);
        return this;
    }

    public has(item: T): boolean {
        return this.items.includes(item);
    }
}