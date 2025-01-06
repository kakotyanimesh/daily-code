"use client"

import { useRef, useState } from "react"
import { Button } from "./Button"
import { Input } from "./Input"
import { signIn } from "next-auth/react"

export default function LogIn() {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [err, setErr] = useState("")    
    const [timerId, settimerId] = useState<NodeJS.Timer | null>(null)
    

    const errNotification = (msg : string) => {
        if(timerId){
            // @ts-ignore
            clearTimeout(timerId)
        }
        setErr(msg)
        const id = setTimeout(() => {
            setErr("")
        }, 1000);

        settimerId(id)

}

    const loginUser = async () => {
        if(!emailRef.current?.value || !passwordRef.current?.value){
            errNotification("empty fields bro")
            return
        }

        try {
            await signIn("credentials", {
                email : emailRef.current.value,
                password : passwordRef.current.value,
                redirect: true,
                callbackUrl : "/dashboard"
            })

        } catch (error) {
            errNotification("something went wrong wrong password erc")
        }
    }
    return <div className="relative">
        {
            err && <div className="absolute ui-bg-blue-900 ui-bg-opacity-60"> {err}</div>
        }
        <div>
            <Input placeholder="EMAIL" type="email" Ref={emailRef} label="email" />
            <Input placeholder="password" type="password" Ref={passwordRef} label="password"/>
            <Button onclick={() => loginUser()} title="login"  varientType="primary"/>
        </div>
    </div>
}