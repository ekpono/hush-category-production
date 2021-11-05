"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UpdateProductValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            status: Validator_1.schema.boolean()
        });
        this.messages = {};
    }
}
exports.default = UpdateProductValidator;
//# sourceMappingURL=UpdateProductCategoryValidator.js.map