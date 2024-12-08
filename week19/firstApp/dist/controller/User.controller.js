"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.signin = exports.signup = void 0;
const zod_1 = require("../utils/zod");
const PrismClient_1 = require("../utils/PrismClient");
const jwt_1 = require("../utils/jwt");
const hashPassword_1 = require("../utils/hashPassword");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedObject = zod_1.signupObject.safeParse(req.body);
    if (!parsedObject.success) {
        res.status(403).json({
            msg: 'Invalid user Inputs',
            err: parsedObject.error.errors
        });
        return;
    }
    const { username, email, password } = parsedObject.data;
    try {
        const hasedPassword = yield (0, hashPassword_1.passwordHash)(password);
        const createdUser = yield PrismClient_1.prisma.user.create({
            data: {
                username,
                password: hasedPassword,
                email
            },
            select: {
                username: true
            }
        });
        res.status(200).json({
            msg: 'user created',
            createdUser
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Error while creating the user error : ${error}`
        });
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedObject = zod_1.signInObject.safeParse(req.body);
    if (!parsedObject.success) {
        res.status(403).json({
            msg: 'Invalid user details',
            error: parsedObject.error.errors
        });
        return;
    }
    const { username, password } = parsedObject.data;
    try {
        const user = yield PrismClient_1.prisma.user.findFirst({
            where: { username }
        });
        if (!user) {
            res.status(403).json({
                msg: 'no user found'
            });
            return;
        }
        const matchedPassword = yield (0, hashPassword_1.comparePassword)(password, user.password);
        if (!matchedPassword) {
            res.status(403).json({
                msg: 'no valid username or password'
            });
            return;
        }
        const accessTokenid = (0, jwt_1.accessToken)(user.id);
        res.status(200).json({
            msg: 'user logged in successfully',
            accessTokenid: accessTokenid
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Error while sign in error : ${error}`
        });
    }
});
exports.signin = signin;
const getUser = (req, res) => {
};
exports.getUser = getUser;
