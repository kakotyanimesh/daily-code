import { z } from "zod"


export const signupObject = z.object({
    name : z.string().max(20, {message : "20 allowed"}),
    email : z.string().email({message : "provide a valid email address"}),
    password : z.string().max(30, {message : "max 30 letter is allowed !! "})
})



export const signinObject = z.object({
    email : z.string().email(),
    password : z.string().max(30, {message : "only 30 character is allowed"})
})

export const RoomObject = z.object({
    slug : z.string().max(10,  {message : "max 10 character allowed"})
})