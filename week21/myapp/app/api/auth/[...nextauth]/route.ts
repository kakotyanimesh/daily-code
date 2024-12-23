import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers :[
        CredentialsProvider({
            name : 'email',
            credentials :{
                username  : {label : 'username', type:'text', placeholder: 'username'},
                email : {label : 'email', type : 'text' , placeholder : 'email'},
                password : {label : 'password', type : 'password', placeholder : 'password'}
            },
            async authorize(credentials, req) {
                return {
                    kuchbhi
                }
            }
        })
    ],
    secret : process.env.NextAuth_secret
})


export { handler as GET, handler as POST}