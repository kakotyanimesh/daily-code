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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../model/user.model");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, username, password } = req.body;
    const hasedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        yield user_model_1.userModel.create({
            username,
            email,
            password: hasedPassword
        });
        res.status(200).json({
            msg: 'user created Successfully'
        });
    }
    catch (error) {
        console.log(`something went wrong while signUp, ${error}`);
    }
});
exports.signUp = signUp;
