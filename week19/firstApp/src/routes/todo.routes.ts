import { Router } from "express";
import { auth } from "../middlewares/user.middleware";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controller/todo.controller";

export const todoRouter = Router()

todoRouter.post('/todo', auth, createTodo)
todoRouter.patch('/updateTodo/:id', auth, updateTodo)
// patch is for update one at a time
todoRouter.get('/gettodos', auth, getTodo)
todoRouter.delete('/delete/:id',auth, deleteTodo)