import { roomObject } from "@repo/common/types";
import { prisma } from "@repo/db";
import { Request, Response } from "express";

export const createRoom = async(req : Request, res: Response) => {
    const parsedObj = roomObject.safeParse(req.body)

    if(!parsedObj.success){
        res.status(403).json({
            err : `zod err : ${JSON.stringify(parsedObj.error.errors)}`
        })
        return
    }

    try {
        const userId = req.userId
        if(!userId){
            return 
        }
        const room = await prisma.rooms.create({
            data : {
                slug : parsedObj.data.slug,
                adminId : userId,
                membersId : userId
            }
        })

        res.status(200).json({
            msg : "room created",
            roomId : room.id
        })
    } catch (error) {
        res.status(500).json({
            msg : `Error while creating room ${error}`
        })
    }
}