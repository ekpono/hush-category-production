"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateProductCategoryValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.unique({ table: 'product_categories', column: 'name' }),
                Validator_1.rules.minLength(2),
                Validator_1.rules.maxLength(40)
            ]),
            status: Validator_1.schema.boolean()
        });
        this.messages = {};
        console.log(this.ctx.params.id);
    }
}
exports.default = CreateProductCategoryValidator;
//# sourceMappingURL=CreateProductCategoryValidator.js.map