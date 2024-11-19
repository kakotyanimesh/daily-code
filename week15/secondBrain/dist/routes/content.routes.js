"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentRouter = void 0;
const express_1 = require("express");
exports.contentRouter = (0, express_1.Router)();
exports.contentRouter.get('/content', (req, res) => {
    res.send('hiii');
});
