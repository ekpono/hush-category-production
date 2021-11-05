"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const ProductCategory_1 = __importDefault(require("./ProductCategory"));
const ProductSubCategory_1 = __importDefault(require("./ProductSubCategory"));
class Product extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Product.prototype, "user_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Product.prototype, "product_category_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Product.prototype, "product_sub_category_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    Orm_1.belongsTo(() => ProductCategory_1.default, {
        foreignKey: 'product_category_id',
    }),
    __metadata("design:type", Object)
], Product.prototype, "category", void 0);
__decorate([
    Orm_1.belongsTo(() => ProductSubCategory_1.default, {
        foreignKey: 'product_sub_category_id',
    }),
    __metadata("design:type", Object)
], Product.prototype, "sub_category", void 0);
exports.default = Product;
//# sourceMappingURL=Product.js.map