
import { useState } from "react"
import { InputBox } from "./Input"
import { ButtonElement } from "./Button"
import axios from 'axios'
import { useRouter } from "next/navigation"


export const AuthenticatedSignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    return <div className="space-y-3 border-2  border-slate-400  px-4 py-5 rounded-md shadow-md shadow-slate-300">
        <h1 className="text-center text-3xl font-bold text-blue-500 ">SignUp</h1>
        <InputBox type="text" placeholder="username" onchange={(e) => setUsername(e.target.value)} />
        <InputBox type="password" placeholder="password" onchange={(e) => setPassword(e.target.value)} />
        <ButtonElement title="signup" onclick={async(e) => {
            const userCreated = await axios.post('http://localhost:3000/api/v1/signup', {
                username,
                password
            })

            // console.log(userCreated.status);
            
            if(userCreated.status === 200) {
                router.push('/signin')
            } else { 
                router.push('/signup')
            }
            
        }}/>
    </div>
}
export const AuthenticatedSigIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    return <div className="space-y-3 border-2  border-slate-400  px-4 py-5 rounded-md shadow-md shadow-slate-300">
        <h1 className="text-center text-3xl font-bold text-blue-500 ">Signin</h1>
        <InputBox type="text" placeholder="username" onchange={(e) => setUsername(e.target.value)} />
        <InputBox type="password" placeholder="password" onchange={(e) => setPassword(e.target.value)} />
        <ButtonElement title="signup" onclick={async(e) => {
            const userCreated = await axios.post('http://localhost:3000/api/v1/signin', {
                username,
                password
            })

            console.log(userCreated);
            
            if(userCreated.status === 200) {
                router.push('/dashboard')
                localStorage.setItem('token', userCreated.data.token)
            } else { 
                router.push('/signin')
            }
            
        }}/>
    </div>
}