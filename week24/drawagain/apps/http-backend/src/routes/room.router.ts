import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { createRoom } from "../controller/room.controller";

const roomRouter : Router = Router()


roomRouter.post('/createRoom', authMiddleware, createRoom)

export default roomRouter