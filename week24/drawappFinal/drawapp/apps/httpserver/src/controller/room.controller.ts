import { joinRoomObject, roomObject } from "@repo/common-config/types";
import { prismaClient } from "@repo/db";
import { request, Request, Response } from "express";

export const createRoom = async(req: Request, res : Response) => {
    const parsedObject = roomObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : `zod error : ${process.env.node_env === "developement" ? parsedObject.error.errors : "undefined"}`
        })
        return
    }

    try {
        const userId = req.userId
        if(!userId){
            return
        }
        const rooms = await prismaClient.room.create({
            data : {
                slug : parsedObject.data.slug,
                adminId : userId
            },select : {
                admin : {
                    select : {
                        name : true
                    }
                },members : {
                    select : {
                        id : true
                    }
                }
            }
        })

        res.status(200).json({
            msg : "room created",
            room : rooms
        })

    } catch (error) {
        res.status(500).json({
            msg : `Eroor while creating room : ${process.env.node_env === "developement" ? error : undefined}`
        })
    }
}


export const rooms = async(req : Request , res : Response) => {
    try {
        const allRooms = await prismaClient.members.findMany()

        res.status(200).json({
            rooms : allRooms
        })
    } catch (error) {
        res.status(500).json({
            msg :  `Eroor while getting room : ${process.env.node_env === "developement" ? error : undefined}`
        })
    }
}

export const joinRoom = async(req : Request, res : Response) => {
    const parsedObject = joinRoomObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : `zod error : ${process.env.node_env === "developement" ? parsedObject.error.errors : "undefined"}`
        })
        return
    }

    try {
        const userId = req.userId

        if(!userId){
            return
        }
        const joinRoom = await prismaClient.members.create({
            data : {
                roomId : parsedObject.data.id,
                membersId : userId
            }
        })

        res.status(200).json({
            joinRoom : joinRoom
        })
    } catch (error) {
        res.status(500).json({

            msg : `join room error ${error}`
        })
    }

}

