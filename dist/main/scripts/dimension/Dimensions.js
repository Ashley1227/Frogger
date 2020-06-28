import Dimension from "../engine/world/dimension/Dimension.js";
import Registry from "../engine/registry/Registry.js";
import Registries from "../engine/registry/Registries.js";
import Identifier from "../engine/identifier/Identifier.js";
export default class Dimensions {
    static register(dimension, name) {
        return Registry.register(Registries.DIMENSIONS, dimension, new Identifier("frogger", name));
    }
}
Dimensions.OVERWORLD = Dimensions.register(new Dimension(), "overworld");
//# sourceMappingURL=Dimensions.js.map