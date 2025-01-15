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

        if (!adminId || typeof adminId !== "string") {
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