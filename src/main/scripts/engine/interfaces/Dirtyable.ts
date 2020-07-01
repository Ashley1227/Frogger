export default interface Dirtyable {
    markDirty(): void;
    isDirty(): boolean;
}