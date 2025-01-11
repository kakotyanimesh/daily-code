import { z } from "zod"


const signupObject = z.object({
    username : z.string(),
    password : z.string()

})