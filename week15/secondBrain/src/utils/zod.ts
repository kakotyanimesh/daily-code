import {z} from 'zod'


export const signupObject = z.object({
    email : z.string().email().endsWith('example.com'),
    username : z.string(),
    password : z.string()
})


export const signInObject = z.object({
    email : z.string().email().endsWith('example.com'),
    password : z.string()
})

