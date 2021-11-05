"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class UsersSchema extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('email', 255).notNullable();
            table.string('username', 255).notNullable();
            table.string('type', 180).defaultTo('admin');
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
            table.enum('gender', ['male', 'female']).notNullable();
            table.string('contact_number', 255).notNullable();
            table.string('address', 255).notNullable();
            table.string('password', 180).notNullable();
            table.string('remember_me_token').nullable();
            table.timestamps(true, true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = UsersSchema;
//# sourceMappingURL=1636017635038_users.js.map