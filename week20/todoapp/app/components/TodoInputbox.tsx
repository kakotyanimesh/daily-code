import { useState } from "react"
import { InputBox } from "./Input"
import { ButtonElement } from "./Button"
import axios from "axios"

export const TodoInputBox = () => {
    const [todo, setTodo] = useState('')
    const [description, setDescription] = useState('')
    return <div className="space-y-5">
        <InputBox type="text" placeholder="todo name" onchange={(e) => setTodo(e.target.value)} />
        <InputBox type="text" placeholder="description" onchange={(e) => setDescription(e.target.value)} />
        <ButtonElement title='add todo' onclick={async() => {
            const deployedTodo = await axios.post('http://localhost:3000/api/v1/todo', {
                title : todo,
                description : description
            },{
                headers : {
                    'Authorization' : localStorage.getItem('token')
                }
            })
            setTodo('')
            setDescription('')
        }} />
    </div>
}