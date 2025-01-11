import { Router } from "express";
import { signUp } from "../controller/user.controller";

const userRouterR : Router = Router()


userRouterR.post('/signup', signUp)

export default userRouterR
