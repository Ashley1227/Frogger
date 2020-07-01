export default class Property<T> {
    private value: T;

    setValue(value: T) {
        this.value = value;
    }
    getValue(): T {
        return this.value;
    }
}