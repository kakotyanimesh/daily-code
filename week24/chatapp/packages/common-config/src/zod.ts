import { z } from "zod"


export const signupObject = z.object({
    email : z.string().email({message : "provide a valid email"}),
    displayname : z.string().max(20, {message : "max 20 letters needed"}),
    password : z.string().max(25, {message : "max 25 word limit bro"})
})


export const signinObject = z.object({
    email : z.string().email({message : "provide a calid email bro"}),
    password : z.string().max(25, {message : "max 20 word limit bro"})
})


export const roomObject = z.object({
    slug : z.string().max(20, {message : "slug name must be within 20 letteres"})
})