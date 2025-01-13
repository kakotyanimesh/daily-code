import { Router } from "express";
import { joinRoom } from "../controller/room.controller";

const roomRouter : Router = Router()

roomRouter.post('/join', joinRoom)

export default roomRouter