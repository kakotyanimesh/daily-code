'use client'
import axios from "axios";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useState } from "react";

export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const alertFunctuon = () => {
        axios.post('http://localhost:3000/api/v1/signup', {
            username,
            password
        })

        
    }
    return ( 
    <div className="flex justify-center items-center h-screen">
        <div className="border-2 border-blue-400 shadow-md shadow-blue-600 flex flex-col space-y-5 rounded-md  p-8">
            <h1 className="text-center">Signin page</h1>
            <InputBox type="text" placeholder="username"  onChange={(e) => setUsername(e.target.value)}/>
            <InputBox type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}  />
            <Button title="signin" onClick={alertFunctuon}/>
        </div>
    </div>
    )
}


