import { z } from "zod"

export const userObject = z.object({
    username : z.string().max(20, {message : "max 20"}),
    password : z.string().max(30, {message : "max 30"}),
    name : z.string().max(20, {message : "max 20"}),
    email : z.string().email({message : "provide a valid email address"}).optional()
})


export const signinObject = z.object({
    username : z.string(),
    password : z.string()
})