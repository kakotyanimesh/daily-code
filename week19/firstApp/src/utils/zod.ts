import z from 'zod'

export const signupObject = z.object({
    username : z.string().min(5, {message : 'min 5 character'}).max(20, {message : 'max 20 character allowed'}),
    password : z.string()
                .min(8, "Password must be at least 8 characters long.")
                .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
                .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
                .regex(/[0-9]/, "Password must contain at least one number.")
                .regex(/[@$!%*?&#]/, "Password must contain at least one special character (@, $, !, %, *, ?, &, or #).")
                .max(64, "Password must not exceed 64 characters."),
    email    : z.string().email({message : 'Enter valid email'})              
})


export const signInObject = z.object({
    username : z.string().min(5, {message : 'min 5 character'}).max(20, {message : 'max 20 character allowed'}),
    password : z.string()
                .min(8, "Password must be at least 8 characters long.")
                .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
                .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
                .regex(/[0-9]/, "Password must contain at least one number.")
                .regex(/[@$!%*?&#]/, "Password must contain at least one special character (@, $, !, %, *, ?, &, or #).")
                .max(64, "Password must not exceed 64 characters."),

})