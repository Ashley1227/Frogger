import Identifier from "./Identifier.js";

/**
 * Things that can have identifiers
 */
export default interface Identifiable {
    IDENTIFIER: Identifier;

    setIdentifier(identifier: Identifier): Identifiable;
    getIdentifier(): Identifier;
}