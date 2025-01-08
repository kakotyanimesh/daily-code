import prisma from "@repo/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

export const  authOpitons : NextAuthOptions = {
    providers : [
        CredentialsProvider({
            name : "username ",
            credentials : {
                username : {label :  "username", placeholder : "username "},
                password : {label : "password", placeholder : "Animeshz23qweerwq"}
            },
            // @ts-ignore
            async authorize(credentials : any) {
                if(!credentials.password || !credentials.username){
                    throw new Error("empty input field bro !!")
                }

                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            username : credentials.username
                        }
                    })
    
                    if(!user) {
                        throw new Error("no user with that username ")
                    }
    
                    const comparePassword = await bcrypt.compare(credentials.password, user.password)
    
                    if(!comparePassword) {
                        throw new Error("incorrect password ")
                    }
    
                    return {
                        name : user.username
                        //username doesont exits here 
                    }
                } catch (error) {
                    throw error
                }
            }
        })
    ],
    callbacks : {
        async jwt({token, user}) {
            if(user){
                token.name = user.name
            }
            return token
        },

        async session({session , token} : any) {
            session.user.name = token.name
            return session
        }
    },
    session :{
        strategy : "jwt",
        maxAge : 36 * 60 * 60 * 60
    },
    // pages : {
    //     'signIn' : "/signin"
    //     'error' : ""
    // },
    secret : process.env.AUTH_SECRET || "ildddfsf"
}