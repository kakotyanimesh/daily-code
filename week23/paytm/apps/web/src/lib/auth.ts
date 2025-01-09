import prisma from "@repo/db";
import { error } from "console";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

export const authOptions : NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name : "username",
            credentials : {
                usename : {label : 'username'},
                password : {label : 'password'}
            },
            // @ts-ignore
            async authorize(credentials){
                if(!credentials?.usename || !credentials.password){
                    throw new Error("Empty fields bro ")
                }

                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            username : credentials.usename
                        }
                    })

                    if(!user) {
                        throw new Error("user doesnot exits ")
                    }

                    const comparePassword = await bcrypt.compare(credentials.password, user.password)

                    if(!comparePassword){
                        throw new Error("incorrect password ")
                    }

                    return {
                        name : user.username,
                        id : user.id
                    }

                } catch (error) {
                    throw error
                }
            }
        })
    ],
    callbacks : {
        async jwt({user, token}){
            // console.log('jwt user : ' + user);
             
            if(user){
                
                token.name = user.name,
                token.sub = user.id 
            }
            return token
        },

        async session({session, token} : any ) {
            
            // console.log('token ' + JSON.stringify(token));
            
            
            session.user.id = token.sub,
            session.user.name = token.name

            // console.log("session " + JSON.stringify(session)) 
            return session
        }
    },
    session : {
        strategy : 'jwt',
        maxAge : 36 * 60 * 60
    },
    secret : process.env.NEXTAUTH_SECRET || "se3ret"
}