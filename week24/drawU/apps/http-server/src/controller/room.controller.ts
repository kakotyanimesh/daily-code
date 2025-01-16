import { RoomObject } from "@repo/common/zod";
import { prisma } from "@repo/db";
import { Request, Response } from "express";

export const roomCreate = async(req : Request, res : Response) => {
    const parsedObject = RoomObject.safeParse(req.body)
    
    if(!parsedObject.success){
        res.status(403).json({
            err : JSON.stringify(parsedObject.error.errors)
        })
        return
    }

    try {

        const adminId = req.userId 

        if (!adminId) {
            res.status(401).json({ msg: "Invalid or missing adminId" });
            return;
        }
        // error yaha hei 

        const room = await prisma.room.create({
            data : {
                slug : parsedObject.data.slug,
                adminId : adminId,
                
            }
        })

        res.status(200).json({
            msg : "room created",
            roomId : room
        })
    
    } catch (error) {
        
        if (error instanceof Error && "code" in error && error.code === "P2002") {
            res.status(409).json({ msg: "Room with this slug already exists" });
            return;
        }

        res.status(500).json({
            msg : `something went wrong while creating room err: ${error} `
        })
    }
}

// two routes => get 1. get chats and 2. get room


export const getChat = async(req : Request, res :Response) => {
    const roomId = Number(req.params.roomId)

    if(!roomId){
        res.status(403).json({
            msg : "you better provide a room Id "
        })
        return
    }

    try {
        const messages = await prisma.chats.findMany({
            where : {
                roomId : roomId
            }, 
            orderBy : {
                id : 'desc'
                // decending order
            }, take : 10
        })

        res.status(200).json({
            messages
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            err : error
        })
    }
}



export const getRoom = async(req : Request, res : Response) => {
    const slug = req.params.slug
    if(!slug){
        res.status(403).json({
            msg : 'no slug bro'
        })

        return
    }

    try {
        const room = await prisma.room.findFirst({
            where : {
                slug : slug
            }
        })

        res.status(200).json({
            room
        })
    } catch (error) {
        throw error
    }
}


export const getAllRooms = async(req : Request, res : Response) => {
    try {
        const rooms = await prisma.room.findMany()

        res.status(200).json({
            rooms
        })
    } catch (error) {
        res.status(500).json({
            err : `error in fetching rooms ${error}`
        })
    }
}