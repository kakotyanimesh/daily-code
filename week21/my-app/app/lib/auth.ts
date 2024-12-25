import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";
import prisma from "./db";

export const authOptions : NextAuthOptions = {
    providers : [
        CredentialsProvider({
            name : 'email',
            credentials : {
                email : {label : 'email', type : 'email', placeholder: "animeshkakoty@33gmail.com"},
                usename : {label : 'username', type : 'text' , placeholder: 'username'},
                password : {label : 'password' , type : 'password', placeholder : 'password'}
            },
            async authorize(credentials) {
                
                if(!credentials?.usename && !credentials?.email && !credentials?.password){
                    return NextResponse.json({
                        msg : 'no credentials provided'
                    },{status : 400})
                }

                const user = await prisma.user.findUnique({
                    where : {
                        email : credentials.email
                    }
                })

                if(!user){
                    return NextResponse.json(
                        {msg : 'no user exits'},
                        {status : 400}
                    )
                }

                const comparePassword = await bcrypt.compare(credentials.password, user.password)

                if(!comparePassword){
                    return NextResponse.json(
                        {msg : 'no password matched bro'},
                        {status : 400}
                    )
                }

                console.log(user);
                

                return user

                
            }


        })
    ]
}