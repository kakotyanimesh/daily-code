import { z } from "zod"

export const userObject = z.object({
    name : z.string().max(20, {message : "max 20 charcater"}),
    password : z.string().max(30, {message : "max 30 character"})
})

export const roomObject = z.object({
    slug : z.string().max(20, {message: "only 20 character allowed"})
})