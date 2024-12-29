import { z } from 'zod'

export const signUPObject = z.object({
    username : z.string().min(2, {message : 'min 2 character is needed'}),
    email : z.string().email({message : 'ENTER A VALID EMAIL'}),
    password : z.string().max(20, {message : 'max 20 character password is allowed'})
})