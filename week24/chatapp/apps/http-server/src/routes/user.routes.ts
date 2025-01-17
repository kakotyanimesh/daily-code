import { Router } from "express";
import { signin, signup } from "../controller/user.controller";

const userRoute : Router = Router()


userRoute.post('/signup',signup)
userRoute.post('/signin', signin)

export default userRoute