"use client"

import AuthPage from "@/app/componets/authpage";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Signup(){
    const nameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    
    const signup = async () => {
        const user = await axios.post("http://localhost:4001/api/v1/user/signup", {
            email : emailRef.current?.value,
            password : passwordRef.current?.value,
            name : nameRef.current?.value
        })

        router.push('/signin')
        return user
    }
    return (
        <AuthPage isSignUp={true} emailRef={emailRef} passwordRef={passwordRef} nameRef={nameRef} onclickfn={signup} />
    )
}