import { Router } from "express";
import { createRoom, getShapes, joinRoom, rooms } from "../controller/room.controller";
import { authMiddleware } from "../middleware/auth";

const roomRouter : Router = Router()


roomRouter.post('/createRoom',authMiddleware, createRoom)
roomRouter.get('/getRooms', rooms)
roomRouter.post('/joinroom', authMiddleware, joinRoom)
roomRouter.get('/shapes/:roomId', getShapes)

export default roomRouter