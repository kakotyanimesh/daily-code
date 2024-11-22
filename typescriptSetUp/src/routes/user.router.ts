import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller";

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.post('/createUser',createUser)

export default userRouter