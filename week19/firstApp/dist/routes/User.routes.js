"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const User_controller_1 = require("../controller/User.controller");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/signup', User_controller_1.signup);
exports.userRouter.post('/signin', User_controller_1.signin);
exports.userRouter.get('/userInfo', User_controller_1.getUser);
