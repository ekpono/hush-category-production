"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const CreateUserValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/CreateUserValidator"));
class AuthController {
    async register(ctx) {
        try {
            const payload = await ctx.request.validate(CreateUserValidator_1.default);
            const user = await User_1.default.create(payload);
            const token = await ctx.auth.use("api").login(user, {
                expiresIn: "10 days",
            });
            return ctx.response.json({
                data: token,
                status: 200,
                message: 'User successfully created'
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
    async login(ctx) {
        const email = ctx.request.input('email');
        const password = ctx.request.input('password');
        try {
            const token = await (await ctx.auth.use('api').attempt(email, password));
            return ctx.response.json({ token: token.token });
        }
        catch {
            return ctx.response.badRequest({
                data: null,
                status: 401,
                message: 'Invalid credentials'
            });
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map