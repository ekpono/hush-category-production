"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductSubCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ProductSubCategory"));
const CreateSubProductCategoryValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/CreateSubProductCategoryValidator"));
class ProductSubCategoriesController {
    async index(ctx) {
        const page = ctx.request.qs().page ?? 1;
        const limit = 10;
        let product = await ProductSubCategory_1.default.query().paginate(page, limit);
        return ctx.response.json({
            data: product,
            status: 200,
            message: 'Product Categories successfully fetched'
        });
    }
    async store(ctx) {
        try {
            const payload = await ctx.request.validate(CreateSubProductCategoryValidator_1.default);
            const productSubCategory = await ProductSubCategory_1.default.create(payload);
            ctx.response.json({
                data: await ProductSubCategory_1.default.find(productSubCategory.id),
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
            const productCategory = await ProductSubCategory_1.default.find(productId);
            if (productCategory) {
                await productCategory.load('category');
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
        let productCategory = await ProductSubCategory_1.default.find(productCatId);
        if (productCategory) {
            productCategory.name = ctx.request.input('name');
            productCategory.product_category_id = ctx.request.input('product_category_id');
            productCategory.status = ctx.request.input('status');
            productCategory.save();
            return ctx.response.json({
                data: productCategory,
                status: 200,
                message: 'Product successful updated'
            });
        }
    }
    async destroy(ctx) {
        let productCatId = ctx.request.params().id;
        const product = (await ProductSubCategory_1.default.find(productCatId))?.delete();
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
            message: 'Product Subcategory Not found'
        });
    }
}
exports.default = ProductSubCategoriesController;
//# sourceMappingURL=ProductSubCategoryController.js.map