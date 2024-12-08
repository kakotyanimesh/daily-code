import { Router } from "express";
import { getUser, signin, signup } from "../controller/User.controller";

export const userRouter = Router()


userRouter.post('/signup', signup)
userRouter.post('/signin', signin)
userRouter.get('/userInfo', getUser)