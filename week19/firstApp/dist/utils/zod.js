"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInObject = exports.signupObject = void 0;
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
