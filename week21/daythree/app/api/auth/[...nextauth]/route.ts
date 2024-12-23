import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name : 'email',
            credentials : {
                email : {label : 'email', type : 'text', placeholder : 'email'},
                password : {label : 'password' , type : 'password', placeholder : 'password'},
                phoneNumber : {label : 'phoneNumber', type : 'number', placeholder : 'number'}
            },
            async authorize(credentials) {
                return {
                    cred : credentials
                }
            }
            
        }),
        GoogleProvider({
            clientId : process.env.Google_Client_Secret,
            clientSecret : process.env.Google_Client_Secret
        }),
        GithubProvider({
            clientId : process.env.Google_Client_Secret,
            clientSecret : process.env.Google_Client_Secret,
        })
    ],
    secret : process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }