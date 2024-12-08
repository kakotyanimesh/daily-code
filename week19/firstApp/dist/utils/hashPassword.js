"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.passwordHash = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const passwordHash = (password) => {
    return bcryptjs_1.default.hash(password, 10);
};
exports.passwordHash = passwordHash;
const comparePassword = (password, dbPassword) => {
    return bcryptjs_1.default.compare(password, dbPassword);
};
exports.comparePassword = comparePassword;