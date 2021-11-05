"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class ProductSubCategories extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'product_sub_categories';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name');
            table
                .boolean('status')
                .defaultTo(true);
            table
                .integer('product_category_id')
                .unsigned()
                .references('product_categories.id')
                .onDelete('CASCADE');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = ProductSubCategories;
//# sourceMappingURL=1636020763545_product_sub_categories.js.map