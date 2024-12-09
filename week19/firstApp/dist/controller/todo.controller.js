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
exports.getTodo = exports.updateTodo = exports.createTodo = void 0;
const zod_1 = require("../utils/zod");
const PrismClient_1 = require("../utils/PrismClient");
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedObject = zod_1.todoObjet.safeParse(req.body);
    if (!parsedObject.success) {
        res.status(403).json({
            msg: 'invalid todo object',
            error: parsedObject.error.errors
        });
        return;
    }
    const { title, description, done } = parsedObject.data;
    // @ts-ignore
    const userId = req.userId;
    // console.log(userId.id);
    try {
        const todos = yield PrismClient_1.prisma.todo.create({
            data: {
                title,
                description,
                done,
                // @ts-ignore
                userId
            },
            select: {
                user: {
                    select: {
                        username: true
                    }
                }
            }
        });
        res.status(200).json({
            msg: 'Todo created successFully',
            todos
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Error while creating Todo error : ${error}`
        });
    }
});
exports.createTodo = createTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const parsedObject = zod_1.todoObjet.safeParse(req.body);
    if (!parsedObject.success) {
        res.status(403).json({
            msg: 'Invalid todo details',
            error: parsedObject.error.errors
        });
        return;
    }
    const { title, description, done } = parsedObject.data;
    try {
        const updatedTodo = yield PrismClient_1.prisma.todo.update({
            where: { id },
            data: {
                title,
                description,
                done
            },
            select: {
                user: {
                    select: {
                        username: true
                    }
                },
                title: true,
                description: true,
                done: true
            }
        });
        res.status(200).json({
            msg: 'Todo updatedSuccessfully',
            updatedTodo
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Error while updating todo error : ${error}`
        });
    }
});
exports.updateTodo = updateTodo;
const getTodo = (req, res) => {
};
exports.getTodo = getTodo;
