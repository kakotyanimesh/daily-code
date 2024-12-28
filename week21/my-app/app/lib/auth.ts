import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
export const authOptions : NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name : 'email',
            credentials : {
                email : {label : 'email', type : 'email', placeholder : 'animesh@gmail.com'},
                password : { label : 'password', type : 'password', placeholder : 'Password@123'}
            },
            async authorize(credentials, req){
                

                const user = {
                    email : "animesh@gmail.com"
                }

                return user 
                
            }
        })
    ]
}