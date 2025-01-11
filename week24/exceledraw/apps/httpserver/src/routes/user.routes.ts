import { Router } from "express";
import { signin, signup } from "../controller/user.controller";

const userRoutes : Router = Router()


userRoutes.post('/signup', signup)
userRoutes.post('/signin', signin)


export default userRoutes