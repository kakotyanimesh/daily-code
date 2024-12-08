import bcrypt from 'bcryptjs'

export const passwordHash = (password : string) => {
    return bcrypt.hash(password, 10)
}


export const comparePassword = (password : string, dbPassword : string) => {
    return bcrypt.compare(password, dbPassword)
}