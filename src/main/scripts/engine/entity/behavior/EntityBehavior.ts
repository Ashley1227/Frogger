import EntityState from "../state/EntityState";

export default abstract class EntityBehavior<T extends  EntityState> {
    public abstract tick(state: T): void;
}