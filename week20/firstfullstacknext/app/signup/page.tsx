"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { ChangeEventHandler, useState } from "react"

export function SignUp(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    return (
        <div className="flex  flex-col justify-center items-center h-screen ">
            <div className="border-2 border-slate-200 shadow-md space-y-4 px-6 py-4 rounded">
                <h1 className="text-center">SignUp</h1>
                <InputBox label="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                <InputBox label="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <div className="bg-blue-200 p-2 text-center rounded-md cursor-pointer" onClick={async() => {
                    const response = await axios.post('http://localhost:3000/api/todos', {
                        username,
                        password
                    })
                    console.log(response);
                    
                    if(response.status === 200) alert('no response')
                        alert('yes response')
                    router.push('/')
                }} >signup</div>
            </div>
            

        </div>
    )
}

const InputBox = ({label, placeholder, onChange} : InputBoxInterface) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="label" className="">{label}</label>
            <input type="text" placeholder={placeholder} className="px-3 rounded-md ring-2 ring-slate-300 py-1" onChange={onChange} />
        </div>
    )
}


interface InputBoxInterface {
    label : string,
    placeholder :  string,
    // type ? : string
    // ref : HTMLInputElement
    onChange : ChangeEventHandler<HTMLInputElement>
}


export default SignUp