import { roomObject } from "@repo/common/types";
import { prismaClient } from "@repo/db";
import { Request, Response } from "express";

export const createRoom = async(req : Request, res : Response) => {
    const parsedObject = roomObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : `zod error : ${parsedObject.error.errors}`
        })
        return
    }

    try {
        const userId = req.userId

        if(!userId){
            return
        }

        const room = await prismaClient.room.create({
            data : {
                slug : parsedObject.data.slug,
                adminId : userId
            }
        })

        res.status(200).json({
            msg : "user created",
            roomId : room.id
        })
    } catch (error) {
        res.status(500).json({
            msg : `server error at room creation ${error}`
        })
    }
}


export const getShapes = async(req : Request, res : Response) => {
    const roomId = req.params.roomId

    // if(!roomId){
    //     res.status(403).json({
    //         msg : "no roomId"
    //     })
    //     return
    // }
    try {
        const shapes = await prismaClient.drawings.findMany({
            where : {
                roomId : Number(roomId)
            }
        })

        res.status(200).json({
            shapes
        })
    } catch (error) {
        res.status(500).json({
            msg : `server error at getting shapes ${error}`
        })
    }
}