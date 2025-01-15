import { z } from "zod"


export const signupObject = z.object({
    name : z.string().max(20, {message : 'max 20 character is allowed'}),
    password : z.string().max(30, {message : "max 30 character is allowed"}),
    email : z.string().email({message : "provide a valid email address"}),
})

export const signInObject = z.object({
    email : z.string().email({message : "provide a valid email"}),
    password : z.string().max(30, {message : "max 30 character is allowed"})
})



export const RoomObject = z.object({
    slug : z.string().min(3, {message : "min 3 character"}).max(20, {message : "max 20 character is allowed"})
})