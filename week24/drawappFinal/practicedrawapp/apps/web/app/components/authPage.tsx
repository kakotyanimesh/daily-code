"use client"

import { useRef } from "react"
import axios from "axios"
import { log } from "console"
import { useRouter } from "next/navigation"


export function AuthPage({isSignup} : {isSignup : boolean}) {

    const router = useRouter()
    const nameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const userLogic = async() => {
        try {
            const user = await axios.post(`http://localhost:4000/api/v1/user/${isSignup ? "signup" : "signin"}`, {
                name : nameRef.current?.value,
                password : passwordRef.current?.value
            })
            router.push(`${isSignup ? "/signin" : "/"}`)
            console.log(user);
            
        } catch (error) {
           throw new Error(error as string) 
        }
        
    }
    return (
        <div className="flex flex-col justify-center items-center text-center min-h-screen">
            <div className="flex flex-col justify-center p-5 space-y-10 w-56">
                <h1>{isSignup ? "signup page" : "signin page "}</h1>
                <input className="px-3 py-2 border-2 border-blue-600 rounded-md" ref={nameRef} type="text" placeholder="name" />
                <input className="px-3 py-2 border-2 border-blue-600 rounded-md" ref={passwordRef} type="text" placeholder="password" />
                <button onClick={userLogic} className="bg-blue-500 rounded-md py-2 ">{isSignup ? "signup" : "signin" }</button>
            </div>
        </div>
    )
}