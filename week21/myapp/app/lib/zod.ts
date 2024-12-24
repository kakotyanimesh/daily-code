import { z } from 'zod'

export const signinObject = z.object({
    username : z.string().max(30, {message : "max 30 character is allowed"}),
    email : z.string().email({message : 'Invalid emailId'}),
    password : z.string().min(5, {message : "min 5 charcater is needed for password"}).max(30, {message : "max 30 character is allowed in the password field !"})

})


