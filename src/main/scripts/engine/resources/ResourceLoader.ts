import Resource from "./Resource";
import Identifier from "../identifier/Identifier";

export default abstract class ResourceLoader {
    private static _amount = 0;

    static loadResource(identifier: Identifier): Resource {
        this._amount++;
        return;
    };

    static isDone(): boolean {
        return this._amount < 1;
    }
}