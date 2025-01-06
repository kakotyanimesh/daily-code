"use client"

import { useRef, useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import axios from "axios"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

// interface InputProps {
//     type : string,
//     Ref : React.RefObject<HTMLInputElement>
// }

export function SignUp() {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [err, setErr] = useState("")
    const [timerId, settimerId] = useState<NodeJS.Timer | null>(null)
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const notificationMsg = (msg : string) => {

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
    const registeruser = async() => {
        if(!emailRef.current?.value || !passwordRef.current?.value){
            return notificationMsg("empty input field bro ")
        }
        try {
            setLoading(true)
            const user = await axios.post("http://localhost:3000/api/auth/register" , {
                email : emailRef.current?.value,
                password : passwordRef.current?.value,
            })

            if(user.status === 200){
                const login = await signIn("credentials", {
                    email : emailRef.current?.value,
                    password : passwordRef.current?.value,
                    redirect : false
                })

                if(login?.error){
                    notificationMsg("login failed after user signed up")
                    return
                }

                router.push("/dashboard")
            }
            
        } catch (error) {
            // @ts-ignore
            console.log(error.response.status);
            
            if(axios.isAxiosError(error) && error.response){
                if(error.response.status === 409){
                    notificationMsg("user already exists")
                } else if(error.response.status === 400){
                    notificationMsg('invalid email')
                } else {
                    notificationMsg("server is dead bro")
                }
            }
            
        }finally{
            setLoading(false)
        }
    }
    return (
        <div className="relative">
            {
                loading && 
                <div className="absolute ui-bg-blue-600 ui-bg-opacity-50">
                    <h1>loading ....</h1>
                </div>
            }
            <div>
                {/* <input type="email"/> */}
                <Input type="email" Ref={emailRef} placeholder="email" label="email" />
                <Input type="password" Ref={passwordRef} placeholder="password" label="password"/>
                <Button varientType="primary" onclick={() => registeruser()} title="signup"/>
                {
                    err && <div>
                        {err}
                    </div>
                }
            </div>
        </div>
    )
}