import { z } from 'zod'

const passwordRegex= '^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'

export const signupObject = z.object({
    username : z.string().min(4, {message : 'min 5 character is allowed'}).max(30, {message : 'max 30 character is allowed'}),
    password : z.string().min(10, {message  : 'min 10 character needed'}).max(30, {message : 'max 30 charcater is allowed'})
                .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter.' })
                .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
                .regex(/[\W_]/, { message: 'Password must contain at least one special character (e.g., !@#$%^&*()_+).' })
                .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
})

export const todoObject = z.object({
    title : z.string().max(100, {message : 'max 100 character is allowed'}),
    description : z.string().max(200, {message : 'max 200 character of description is allowed'}),
    done : z.boolean()
})