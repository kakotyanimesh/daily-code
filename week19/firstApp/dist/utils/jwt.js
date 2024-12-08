"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.accessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const accessToken = (id) => {
    return jsonwebtoken_1.default.sign({
        id
    }, process.env.AcessTokenKey, { expiresIn: process.env.AccessTokenExpiry });
};
exports.accessToken = accessToken;
const verifyJwt = (accessTokenId) => {
    return jsonwebtoken_1.default.verify(accessTokenId, process.env.AccessTokenKey);
};
exports.verifyJwt = verifyJwt;
