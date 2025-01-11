import { Router } from "express";
import { room } from "../controller/room.controller";

const roomRouter : Router = Router()


roomRouter.post('/room', room)

export default roomRouter