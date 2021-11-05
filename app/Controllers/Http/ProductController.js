"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Product"));
const CreateProductValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/CreateProductValidator"));
class ProductsController {
    async index(ctx) {
        let product = await Product_1.default.query().preload("category").preload('sub_category');
        return ctx.response.json({
            data: product,
            status: 200,
            message: 'Product successfully fetched'
        });
    }
    async store(ctx) {
        try {
            const user = await ctx.auth.authenticate();
            const payload = await ctx.request.validate(CreateProductValidator_1.default);
            const product = await Product_1.default.create(Object.assign(payload, { user_id: user.id }));
            ctx.response.json({
                data: await Product_1.default.find(product.id),
                status: 200,
                message: 'Product successfully created'
            });
        }
        catch (error) {
            ctx.response.status(422).json({
                data: error.messages.errors,
                status: 422,
                message: 'Something went wrong'
            });
        }
    }
    async show(ctx) {
        let productId = ctx.request.params().id;
        try {
            const product = await Product_1.default.findBy('id', productId);
            if (product) {
                await product.load('category');
                await product.load('sub_category');
                return ctx.response.json({
                    data: product,
                    status: 200,
                    message: 'Product successfully fetched'
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
        let productId = ctx.request.params().id;
        let product = await Product_1.default.find(productId);
        await ctx.request.validate(CreateProductValidator_1.default);
        if (product) {
            product.price = ctx.request.input('price') ?? product.price;
            product.description = ctx.request.input('description') ?? product.description;
            product.title = ctx.request.input('title') ?? product.title;
            product.title = ctx.request.input('title') ?? product.title;
            product.product_sub_category_id = ctx.request.input('product_sub_category_id') ?? product.product_sub_category_id;
            product.product_category_id = ctx.request.input('product_category_id') ?? product.product_category_id;
            product.save();
            return ctx.response.json({
                data: product,
                status: 200,
                message: 'Product successful updated'
            });
        }
    }
    async destroy(ctx) {
        let productId = ctx.request.params().id;
        const user = await ctx.auth.authenticate();
        const product = await Product_1.default.query().where('user_id', user.id).where('id', productId).delete();
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
exports.default = ProductsController;
//# sourceMappingURL=ProductController.js.map