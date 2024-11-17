"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const port = 3000;
const app = (0, express_1.default)();
app.post('/api/v1/signup', (req, res) => {
});
app.post('/api/v1/signin', (req, res) => {
});
app.get('/api/v1/content', (req, res) => {
});
app.listen(port, () => {
    mongoose_1.default.connect('');
    console.log(`the app is running at http://localhost/${port}`);
});
