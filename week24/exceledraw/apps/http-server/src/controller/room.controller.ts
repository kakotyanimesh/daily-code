import { Request, Response } from "express";

export const joinRoom = (req : Request, res : Response) => {
    res.json({
        room : {
            roomId : "!21212"
        }
    })
}


export const createRoom = (req : Request, res : Response) => {
    
}