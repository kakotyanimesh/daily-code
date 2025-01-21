"use client"

import AuthPage from "@/app/componets/authpage";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Signin(){
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const signin = async() => {
        const user = await axios.post("http://localhost:4001/api/v1/user/signin", {
            email : emailRef.current?.value,
            password : passwordRef.current?.value
        })

        router.push("/")
        return user

    }
    return (
        <AuthPage isSignUp={false} emailRef={emailRef} passwordRef={passwordRef} onclickfn={signin} />
    )
}