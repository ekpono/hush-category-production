"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class ProductValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            product_category_id: Validator_1.schema.number([
                Validator_1.rules.exists({ table: 'product_categories', column: 'id' }),
            ]),
            product_sub_category_id: Validator_1.schema.number([
                Validator_1.rules.exists({ table: 'product_sub_categories', column: 'id' }),
            ]),
            title: Validator_1.schema.string({ trim: true }),
            description: Validator_1.schema.string({ trim: true }),
            price: Validator_1.schema.number()
        });
        this.messages = {};
    }
}
exports.default = ProductValidator;
//# sourceMappingURL=CreateProductValidator.js.map