import { z } from "zod"

export const signupObject = z.object({
    email : z.string().email({message : "provide a valid email"}),
    password : z.string().max(30, {message : "max 30 allowed"}),
    name : z.string().max(20,  {message : "only 20 allowed"})
})


export const signinObject = z.object({
    email : z.string().email({message : "provide a valid email"}),
    password : z.string().max(30, {message : "only 30 character is allowed bro"})
})


export const roomObject = z.object({
    slug : z.string().max(20, {message : "only 20 character's roomName is allowed"})
})

export const joinRoomObject = z.object({
    id : z.number()
})