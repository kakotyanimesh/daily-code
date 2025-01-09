import { string, z } from "zod"

export const userObject = z.object({
    username : z.string(),
    password : z.string()
})


export const TranscationObject = z.object({
    senderName : z.string(),
    receiverName : z.string(),
    amount : z.number().positive()
})