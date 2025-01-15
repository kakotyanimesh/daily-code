import { Router } from "express";
import { signin, signup } from "../controller/user.controller";

const userRouter: Router = Router()

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)

export default userRouter