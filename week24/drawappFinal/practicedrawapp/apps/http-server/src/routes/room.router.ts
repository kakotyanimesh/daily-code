import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { createRoom, getShapes } from "../controller/room.controller";

const roomRouter : Router = Router()


roomRouter.post("/createRoom", authMiddleware, createRoom )
roomRouter.get("/getShapes/:roomId", authMiddleware, getShapes)

export default roomRouter
