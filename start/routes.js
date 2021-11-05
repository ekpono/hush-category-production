"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', (ctx) => {
    ctx.response.send({ message: 'Connection successful' });
});
Route_1.default.group(() => {
    Route_1.default.get('/', (ctx) => {
        ctx.response.send({ message: 'api connected' });
    });
    Route_1.default.post('login', 'AuthController.login');
    Route_1.default.post('register', 'AuthController.register');
    Route_1.default.group(() => {
        Route_1.default.resource('products', 'ProductController');
        Route_1.default.resource('products/category', 'ProductCategoryController');
        Route_1.default.resource('products/sub_category', 'ProductSubCategoryController');
    }).middleware('auth:api');
}).prefix('/api/');
//# sourceMappingURL=routes.js.map