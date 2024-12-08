"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_routes_1 = require("./routes/User.routes");
const todo_routes_1 = require("./routes/todo.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3000;
app.use('/api/v1/user', User_routes_1.userRouter);
app.use('/api/v1/todo', todo_routes_1.todoRouter);
app.listen(port, () => {
    console.log(`the app is running at http://localhost:${port}`);
});
