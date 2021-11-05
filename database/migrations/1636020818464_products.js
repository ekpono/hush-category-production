"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Products extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'products';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table
                .integer('user_id')
                .unsigned()
                .references('users.id')
                .onDelete('CASCADE');
            table
                .integer('product_category_id')
                .unsigned()
                .references('product_categories.id')
                .onDelete('CASCADE');
            table
                .integer('product_sub_category_id')
                .unsigned()
                .references('product_sub_categories.id')
                .onDelete('CASCADE');
            table.string('title', 255).notNullable();
            table.string('description', 255).notNullable();
            table.float('price', 255).notNullable();
            table.timestamps(true, true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Products;
//# sourceMappingURL=1636020818464_products.js.map