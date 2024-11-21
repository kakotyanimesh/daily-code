import { Router, Request, Response } from "express";
import { ValidationMiddleware } from "../middlewares/Validation";
import { signInObject, signupObject } from "../utils/zod";
import { signIn, signUp } from "../controller/user.controller";

const userRouter = Router()


userRouter.post('/signUp', ValidationMiddleware(signupObject), signUp)
userRouter.post('/signIn', ValidationMiddleware(signInObject), signIn)

export default userRouter