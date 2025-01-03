import prisma from "@repo/db";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from 'next-auth/providers/credentials'
import { NextResponse } from "next/server";



const comparePassword = ({userPassword, dbpassword} : {
    userPassword : string,
    dbpassword : string
}) => {
    return userPassword === dbpassword ? true : false
}

export const authOptions : NextAuthOptions = {
    providers : [
        CredentialProvider({
            name : 'emai',
            credentials : {
                username : {label : 'username', placeholder : 'usernmae'},
                password : {label : 'password', type : "password", placeholder: 'password'}
            },
            // @ts-ignore
            async authorize(credentials){
                if(!credentials?.username && credentials?.password){
                    return NextResponse.json({
                        msg : ' no fucking usernmae nad password'
                    })
                }
                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            username : credentials?.username
                        }
                    })

                    if(!user){
                        return NextResponse.json({
                            msg : "no userame found"
                        })
                    }
                    // @ts-ignore
                    const isValid = comparePassword({userPassword : credentials?.password, dbpassword : user.password})

                    if(!isValid){
                        return NextResponse.json({
                            msg : 'invalid password'
                        })
                    }
                    
                    return {
                        username : user.username,
                        id : user.id
                    }


                } catch (error) {
                    return NextResponse.json({
                        MSG : 'ERROR SIGNIn'
                    })
                }
            }
        })
    ],  
    callbacks : {
        async jwt({ token, user} : any){
            token.username = user.username 
            return token
        },
        async session({session, token}: any){
            session.user.username = token.username
            return session
        }
    },
    // pages : {

    // },
    session : {
        strategy : 'jwt',
        maxAge : 30 * 24 * 60 * 60
    },
    
    secret : process.env.AUTH_SECRET || 'screut'
}