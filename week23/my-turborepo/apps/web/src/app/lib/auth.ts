import prisma from "@repo/db";
import bcrypt from "bcryptjs"
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions : NextAuthOptions = ({
    providers : [
        CredentialsProvider({
            name : "email",
            credentials : {
                email : {label : "email" , type : "email"},
                password : {label : "password" , type : "password"}
            },
            // @ts-ignore
            async authorize(credentials){
                if(!credentials?.email || !credentials.password){
                    throw new Error("input field is empty")
                }

                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            email : credentials.email
                        }
                    })

                    if(!user){
                        throw new Error("no user exits with the email")
                    }

                    const isValid = await bcrypt.compare(credentials.password, user.password)
                    if(!isValid){
                        throw new Error("incorrect password")
                    }

                    return {
                        email : user.email,
                        id : user.password
                    }
                } catch (error) {
                    throw new Error(`Error in signin err : ${error}`)
                }
            }
        })
    ],
    callbacks : {
        async jwt({token, user} : any){
            if(user) {
                token.email = user.email,
                token.id = user.id
            }
            return token
        },
        async session({session, token} : any){
            session.user.email = token.email,
            session.use.id = token.id
            return session 
        }
    },
    pages : {
        signIn : "/signin",
        error : "/signin"
    },
    session : {
        strategy : "jwt",
        maxAge : 60 * 60 * 60 * 60
    },
    secret : process.env.AUTH_SECRET || "secret"
})