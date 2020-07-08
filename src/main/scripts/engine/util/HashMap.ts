import Hashable from "../interfaces/Hashable";

export default class HashMap<K extends Hashable, V> implements Map<K, V> {
    readonly [Symbol.toStringTag]: string;
    readonly size: number;

    private map: Map<string, [K, V]>;

    constructor() {
        this.map = new Map<string, [K, V]>();
    }

    get(key: K): V {
        let thing = this.map.get(key.getHashCode());
        if (thing)
            return thing[1];
        return undefined;
    }

    [Symbol.iterator](): IterableIterator<[K, V]> {
        return new EntriesIterator(this.map);
    }

    clear(): void {
        this.map.clear();
    }

    delete(key: K): boolean {
        return this.map.delete(key.getHashCode());
    }

    entries(): IterableIterator<[K, V]> {
        return new EntriesIterator(this.map);
    }

    has(key: K): boolean {
        return this.map.has(key.getHashCode());
    }

    keys(): IterableIterator<K> {
        return new KeysIterator(this.map);
    }

    set(key: K, value: V): this {
        this.map.set(key.getHashCode(), [key, value]);
        return this;
    }

    values(): IterableIterator<V> {
        return new ValuesIterator(this.map);
    }

    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
    }
}

class EntriesIterator<K, V> implements IterableIterator<[K, V]> {

    private internalIterator: IterableIterator<[string, [K, V]]>;

    constructor(private map: Map<string, [K, V]>) {
        this.internalIterator = map[Symbol.iterator]();
    }

    [Symbol.iterator](): IterableIterator<[K, V]> {
        return this;
    }

    next(): IteratorResult<[K, V]> {
        let next = this.internalIterator.next();
        return {
            done: next.done,
            value: next.value && next.value[1]
        }
    }

}

class ValuesIterator<K, V> implements IterableIterator<V> {

    private internalIterator: IterableIterator<[K, V]>;

    constructor(private map: Map<string, [K, V]>) {
        this.internalIterator = this.map.values();
    }

    [Symbol.iterator](): IterableIterator<V> {
        return this;
    }

    next(): IteratorResult<V> {
        let next = this.internalIterator.next();
        return {
            done: next.done,
            value: next.value && next.value[1]
        }
    }

}

class KeysIterator<K, V> implements IterableIterator<K> {

    private internalIterator: IterableIterator<[K, V]>;

    constructor(private map: Map<string, [K, V]>) {
        this.internalIterator = this.map.values();
    }

    [Symbol.iterator](): IterableIterator<K> {
        return this;
    }

    next(): IteratorResult<K> {
        let next = this.internalIterator.next();
        return {
            done: next.done,
            value: next.value && next.value[0]
        }
    }

}