import { Router } from "express";
import { signUp } from "../controller/user.controller";

export const userRouter = Router()

userRouter.post('/signUp', signUp)