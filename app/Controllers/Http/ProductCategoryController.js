"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ProductCategory"));
const CreateProductCategoryValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/CreateProductCategoryValidator"));
const UpdateProductCategoryValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateProductCategoryValidator"));
class ProductCategoriesController {
    async index(ctx) {
        const page = ctx.request.input('page', 1);
        const limit = 10;
        let product = await ProductCategory_1.default.query().paginate(page, limit);
        return ctx.response.json({
            data: product,
            status: 200,
            message: 'Product successfully fetched'
        });
    }
    async store(ctx) {
        try {
            const payload = await ctx.request.validate(CreateProductCategoryValidator_1.default);
            const product = await ProductCategory_1.default.create(payload);
            return ctx.response.json({
                data: await ProductCategory_1.default.find(product.id),
                status: 200,
                message: 'Product category successfully created'
            });
        }
        catch (error) {
            ctx.response.badRequest({
                data: error.messages.errors,
                status: 401,
                message: 'Something went wrong'
            });
        }
    }
    async show(ctx) {
        let productId = ctx.request.params().id;
        try {
            const productCategory = await ProductCategory_1.default.find(productId);
            if (productCategory) {
                return ctx.response.json({
                    data: productCategory,
                    status: 200,
                    message: 'Product Category successfully fetched'
                });
            }
            ctx.response.status(404).json({
                data: [],
                status: 404,
                message: 'Not record found'
            });
        }
        catch (error) {
            ctx.response.status(401).json({
                data: error.messages.errors,
                status: 401,
                message: 'Something went wrong'
            });
        }
    }
    async update(ctx) {
        let productCatId = ctx.request.params().id;
        let productCategory = await ProductCategory_1.default.find(productCatId);
        await ctx.request.validate(UpdateProductCategoryValidator_1.default);
        try {
            if (productCategory) {
                productCategory.name = ctx.request.input('name');
                productCategory.status = ctx.request.input('status');
                productCategory.save();
                return ctx.response.json({
                    data: productCategory,
                    status: 200,
                    message: 'Product successful updated'
                });
            }
            return ctx.response.status(404).json({
                data: [],
                status: 404,
                message: 'Product Category Not found'
            });
        }
        catch (error) {
            return ctx.response.json(error);
        }
    }
    async destroy(ctx) {
        let productId = ctx.request.params().id;
        const product = (await ProductCategory_1.default.find(productId))?.delete();
        if (product) {
            return ctx.response.json({
                data: [],
                status: 200,
                message: 'Delete successful'
            });
        }
        return ctx.response.status(404).json({
            data: [],
            status: 404,
            message: 'Product Not found'
        });
    }
}
exports.default = ProductCategoriesController;
//# sourceMappingURL=ProductCategoryController.js.map