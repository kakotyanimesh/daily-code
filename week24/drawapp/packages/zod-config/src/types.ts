import { z } from "zod"

export const userObject = z.object({
    email : z.string().email(),
    password : z.string(),
    name : z.string()
})