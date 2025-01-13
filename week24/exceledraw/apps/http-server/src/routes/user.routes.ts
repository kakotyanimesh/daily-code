import { Router } from "express";
import { getUser, signin, signup } from "../controller/user.controller";

const userRouter : Router = Router()

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)
userRouter.get('/details', getUser)

export default userRouter