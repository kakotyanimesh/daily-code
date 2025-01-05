import prisma from "@repo/db";
import { NextAuthOptions } from "next-auth";
import CredentialProviders from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

export const authOptions : NextAuthOptions = {
    providers : [
        CredentialProviders({
            name : "email",
            credentials : {
                email : {label : "email" , type : "email", placeholder : "email@email.com"},
                password : {label : "password" , type : "password", placeholder : "Passwedfscc@33"}
            },
            // @ts-ignore
            async authorize(credentials){
                if(!credentials?.email || !credentials.password){
                    throw new Error("Input field is empty bro")
                }

                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            email : credentials.email
                        }
                    })

                    if(!user){
                        throw new Error("user doesnot exits with the email bro")
                    }

                    const isValid = await bcrypt.compare(credentials.password, user.password)

                    if(!isValid){
                        throw new Error("password doesnot matched try again")
                    }

                    return {
                        email : user.email,
                        id : user.id
                    }
                } catch (error) {
                    throw new Error(`Error while signup error : ${error}`)
                }
            }
        })
    ],
    callbacks : {
        async jwt({token, user} :any) {
            token.email = user.email,
            token.id = user.id
            // will create object name token which has two field email and id that he/she will get from user object that is created by session method
            // this token is jwt token
            // will run after session
            // first session runs then jwt
            return token
        },
        async session({session, token}: any) {
            session.user.email = token.email
            session.user.id = token.sub
            // created user object inside session with data that the provider returns in the format of token (not jwt token)
            return session
        }
    },
    pages : {
        signIn : "/signin"
    },
    session :{
        strategy : "jwt",
        maxAge : 30 * 24 * 60 * 60
    }, 
    secret : process.env.AUTH_SECRET || "secret"
}