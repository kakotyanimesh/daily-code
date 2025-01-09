import prisma from "@repo/db";
import { AuthOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";
export const authOptions : AuthOptions = {
    providers : [
        CredentialsProvider({
            name : "username",
            credentials : {
                username : {label : "username"},
                password : {label : "password"}
            },
            // @ts-ignore
            async authorize(credentials) {
                if(!credentials?.password || !credentials.username){
                    throw new Error('EMTPY INPUT FILEDS ')
                }

                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            username : credentials.username
                        }
                    })

                    if(!user){
                        throw new Error("no user exits with that username ")
                    }

                    const comparePassword = await bcrypt.compare(credentials.password, user.password)

                    if(!comparePassword){
                        throw new Error("incorrect password")
                    }

                    return {
                        name : user.username
                    }
                } catch (error) {
                    return NextResponse.json({
                        msg : `${error}`
                    })
                }
            }
        })
    ],
    callbacks : {
        async jwt({user, token}){
            if(user){
                token.name = user.name
            }
            return token
        },
        async session({session, token} : any) {
            session.user.name = token.name
            return session
        }
        
    },
    session : {
        strategy : 'jwt',
        maxAge : 36 * 60 * 60 * 60
    }, secret : process.env.AUTH_SECRET || 'secret'
}