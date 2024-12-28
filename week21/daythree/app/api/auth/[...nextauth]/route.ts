import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'


const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name : 'email',
            credentials : {
                email : {label : 'email', type : 'text', placeholder : 'email'},
                password : {label : 'password' , type : 'password', placeholder : 'password'}
            },
            async authorize(credentials) {
                return {
                    email: "animeadadasds@gmail.com"
                }
            }
            
        })
    ],
    secret : process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }