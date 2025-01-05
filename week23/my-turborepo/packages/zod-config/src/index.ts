import { z } from "zod"

export const userObject = z.object({
    email : z.string().email({message : "enter a valid email address"}),
    password : z.string().max(25, {message : "max 25 is allowed "})
})


