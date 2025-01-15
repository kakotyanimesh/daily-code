import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { roomCreate } from "../controller/room.controller";

const roomRouter : Router = Router()


roomRouter.post('/createRoom', authMiddleware, roomCreate)


export default roomRouter