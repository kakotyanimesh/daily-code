import { Router } from "express";
import { auth } from "../middlewares/user.middleware";
import { createTodo, getTodo, updateTodo } from "../controller/todo.controller";

export const todoRouter = Router()

todoRouter.post('/todo', auth, createTodo)
todoRouter.patch('/updateTodo', auth, updateTodo)
todoRouter.get('/todos', auth, getTodo)