"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInObject = exports.signupObject = void 0;
const zod_1 = require("zod");
exports.signupObject = zod_1.z.object({
    email: zod_1.z.string().email().endsWith('example.com'),
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
exports.signInObject = zod_1.z.object({
    email: zod_1.z.string().email().endsWith('example.com'),
    password: zod_1.z.string()
});
