"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateUserValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.email(),
                Validator_1.rules.unique({ table: 'users', column: 'email' }),
                Validator_1.rules.minLength(4),
                Validator_1.rules.maxLength(40)
            ]),
            username: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.unique({ table: 'users', column: 'username' }),
                Validator_1.rules.minLength(3),
                Validator_1.rules.maxLength(40)
            ]),
            password: Validator_1.schema.string({ trim: true }),
            first_name: Validator_1.schema.string({ trim: true }),
            last_name: Validator_1.schema.string({ trim: true }),
            gender: Validator_1.schema.enum(['male', 'female']),
            contact_number: Validator_1.schema.string({ trim: true }),
            address: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {};
    }
}
exports.default = CreateUserValidator;
//# sourceMappingURL=CreateUserValidator.js.map