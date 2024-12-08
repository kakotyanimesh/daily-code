"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoObjet = exports.signInObject = exports.signupObject = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupObject = zod_1.default.object({
    username: zod_1.default.string().min(5, { message: 'min 5 character' }).max(20, { message: 'max 20 character allowed' }),
    password: zod_1.default.string()
        .min(8, "Password must be at least 8 characters long.")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .regex(/[0-9]/, "Password must contain at least one number.")
        .regex(/[@$!%*?&#]/, "Password must contain at least one special character (@, $, !, %, *, ?, &, or #).")
        .max(64, "Password must not exceed 64 characters."),
    email: zod_1.default.string().email({ message: 'Enter valid email' })
});
exports.signInObject = zod_1.default.object({
    username: zod_1.default.string().min(5, { message: 'min 5 character' }).max(20, { message: 'max 20 character allowed' }),
    password: zod_1.default.string()
        .min(8, "Password must be at least 8 characters long.")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .regex(/[0-9]/, "Password must contain at least one number.")
        .regex(/[@$!%*?&#]/, "Password must contain at least one special character (@, $, !, %, *, ?, &, or #).")
        .max(64, "Password must not exceed 64 characters."),
});
exports.todoObjet = zod_1.default.object({
    title: zod_1.default.string().min(10, { message: 'min 10 character needed' }).max(100, { message: 'max 100 character is allowed' }),
    description: zod_1.default.string().min(10, { message: 'min 10 character is needed' }).max(200, { message: 'max 200 character is allowed' }),
    done: zod_1.default.boolean(),
    // userId : z.number(),
});
