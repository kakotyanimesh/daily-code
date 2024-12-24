'use client'
import { signIn, signOut } from "next-auth/react"

export const SignIn = () => {
    return (
        <button onClick={() => signIn()}>signin</button>
    )
}


export const Expire = () => {
    return (
        <button onClick={() => signOut()}>log out</button>
    )
}