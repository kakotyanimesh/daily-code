import { RoomObject } from "@repo/common/types";
import { prisma } from "@repo/db";
import { Request, Response } from "express";

export const createRoom = async(req : Request, res : Response) => {
    const parsedObj = RoomObject.safeParse(req.body)

    if(!parsedObj.success){
        res.status(409).json({
            msg : `zod err : ${JSON.stringify(parsedObj.error.errors)}`
        })
        return
    }

    try {
        const adminId = req.userId

        if(!adminId){
            res.status(401).json({
                msg : "no admin id bro"
            })
            return
        }
        const room = await prisma.room.create({
            data : {
                slug : parsedObj.data.slug,
                adminId : adminId
            }
        })

        res.status(200).json({
            msg : "room created",
            roomId : room.id
        })
    } catch (error) {
        res.status(500).json({
            msg : `error in creation of room ${error}`
        })
    }
}