import { Router } from "express";
import { signup } from "../controller/user.controller";

const userRouter : Router = Router()


userRouter.post("/signup", signup)

export default userRouter