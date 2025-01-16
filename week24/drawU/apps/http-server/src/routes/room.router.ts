import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { getAllRooms, getChat, getRoom, roomCreate } from "../controller/room.controller";

const roomRouter : Router = Router()


roomRouter.post('/createRoom', authMiddleware, roomCreate)
roomRouter.get('/chats/:roomId', authMiddleware, getChat)
roomRouter.get('/:slug', authMiddleware, getRoom)
//http://localhost:4000/api/v1/room/animesh
roomRouter.get('/allrooms', getAllRooms)

export default roomRouter