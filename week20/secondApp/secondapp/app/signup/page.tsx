'use client'
import { useState } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const singUp = async() => {
        await axios.post('http://localhost:3000/api/v1/signup', {
            username,
            password
        })

        router.push('/signin')

    }
    return <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col border-2 p-6 rounded-md shadow-md shadow-blue-600 space-y-4 border-blue-600">
            <h1 className="text-center">Signup Page</h1>
            <InputBox type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <InputBox type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <Button title='signup' onClick={singUp}/>
        </div>
    </div>
}