import { z } from "zod"

export const userObject = z.object({
    username : z.string(),
    password : z.string()
})