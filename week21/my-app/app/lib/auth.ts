import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import prisma from "./db";
import bcrypt from 'bcryptjs'
export const authOptions : NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name : 'email',
            credentials : {
                email : {label : 'email', type : 'email', placeholder : 'animesh@gmail.com'},
                password : { label : 'password', type : 'password', placeholder : 'Password@123'}
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials.password){
                    return NextResponse.json(
                        {msg : 'provide some email and password '}
                    )
                }

                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            email : credentials?.email
                        }
                    })
    
                    if(!user){
                        return NextResponse.json(
                            {msg : 'user doesnot exists check username or password'}
                        )
                    }
    
                    const isValid = await bcrypt.compare(credentials?.password, user.password)
    
                    if(!isValid){
                        return NextResponse.json(
                            {msg : 'password doesnot matched bro !! '}
                        )
                    }
    
                    return NextResponse.json(
                        {
                            id : user.id,
                            username : user.email
                        },
                        {status : 201}
                    )
                } catch (error) {
                    return NextResponse.json(
                        {msg : `Error while signin ${error}`}
                    )
                }

            },
            call
        })
    ]
}