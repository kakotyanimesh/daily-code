"use client"

import { useRef, useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import axios from "axios"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export const SignUp = () => {
    const router = useRouter()
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [err, seterr] = useState("")
    const [timerID, setTimerID] = useState<NodeJS.Timer | null>(null)


    const errMsgNotification = (msg : string) => {
        if(timerID){
            // @ts-ignore
            clearTimeout(timerID)
        }

        seterr(msg)
        const id = setTimeout(() => {
            seterr("")
        }, 2000);

        setTimerID(id)
    }

    const registerUser = async () => {
        if(!emailRef.current?.value || !passwordRef.current?.value){
            return errMsgNotification('empty fields bro ')
        }
        try {
            const res = await axios.post("http://localhost:3000/api/auth//register", {
                email : emailRef.current.value,
                password : passwordRef.current.value
            })

            if(res.status === 200) {
                const login = await signIn('credentials', {
                    email : emailRef.current.value,
                    password : passwordRef.current.value,
                    redirect : false
                })

                if(login?.error){
                    errMsgNotification("login failed after registration")
                    return  
                }

            }

            router.push('/dashboard')

        } catch (error) {
            console.log(error);
            
            if(axios.isAxiosError(error) && error.response){
                if(error.response.status === 409){
                    errMsgNotification("user already exists bro")
                } else {
                    errMsgNotification("something went wrong ")
                }
            } else {
                errMsgNotification("server is dead bro ")
            }
        }
    }

    return (
        <div className="relative">
            <div className="flex ui-justify-center ui-flex-col ui-min-h-screen ui-items-center">
                <div className="ui-text-xl sm:ui-text-2xl ui-space-y-3 ui-w-[500px] ui-p-3 hover:ui-shadow-md hover:ui-shadow-emerald-700
                ui-transition ui-delay-200 ui-rounded-md ui-bg-gradient-to-r ui-from-pink-900 ui-via-yellow-400 ui-to-blue-500">
                    <h1 className="ui-text-center">signup as user bro </h1>
                    <Input type="email" placeholder="animesh33@gmail.com" Ref={emailRef} label="email"  />
                    <Input type="password" placeholder="Psssword" Ref={passwordRef} label="password"  />
                    <Button title="signup" onclick={() => registerUser()}  varientType="primary"/>
                </div>
            </div>
            <div className="absolute ui-top-10 ui-right-4">
                {
                    err && <div className="ui-bg-gradient-to-b ui-w-fit ui-p-3 ui-rounded-md ui-from-blue-400 ui-to-fuchsia-200 ui-via-green-400 ui-top-7 ">{err}</div>
                }
            </div>
        </div>
    )
}