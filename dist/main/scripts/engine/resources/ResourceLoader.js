export default class ResourceLoader {
    static loadResource(identifier) {
        this._amount++;
        return null;
    }
    ;
    static isDone() {
        return this._amount < 1;
    }
}
ResourceLoader._amount = 0;
//# sourceMappingURL=ResourceLoader.js.map