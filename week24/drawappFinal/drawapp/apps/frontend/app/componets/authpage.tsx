"use client"

import { useRef } from "react"
import Button from "./button"
import InputElememt from "./InputElements"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function AuthPage ({isSignUp} : {
    isSignUp : boolean
}) {
    const router = useRouter()
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)


    const signup = async() => {
        const user = await axios.post("http://localhost:4001/api/v1/user/signup",{
            name : nameRef.current?.value,
            email : emailRef.current?.value,
            password : passwordRef.current?.value
        })
        
        return user
        router.push('/signin')
    }

    const signin = async() => {
        const loggedIn = await axios.post("http://localhost:4001/api/v1/signin", {
            email : emailRef.current?.value,
            password : passwordRef.current?.value
        })

        return loggedIn
    }

    return (

        <div className="flex justify-center items-center text-center min-h-screen">
            <div className="flex flex-col space-y-2">
                {isSignUp ? <InputElememt type="name" placeholder="username"Ref={nameRef}/> : ""}
                <InputElememt type="name" placeholder="email" Ref={emailRef}/>
                <InputElememt type="password" placeholder="password" Ref={passwordRef}/>
                {
                    isSignUp ? 
                        <Button title="signup" onclick={() => signup()}/> 
                    :
                        <Button title="signin" onclick={() => signin()}/>

                }
            </div>
            
        </div>
    )
}