import { z } from "zod"

export const signupObject = z.object({
    email : z.string().email(),
    username : z.string().max(14, {message : "max 20 bir"}),
    password : z.string().max(40, {message : "40 allowed"})
})

export const signinObject = z.object({
    username : z.string().max(14, {message : "max 20 bir"}),
    password : z.string().max(40, {message : "40 allowed"})
})