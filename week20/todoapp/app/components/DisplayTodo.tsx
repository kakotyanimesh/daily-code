import axios from "axios"
import { useEffect, useState } from "react"
import { date } from "zod"


export const DisplayTodo = () => {
    const [todolist, setTodolist] = useState([])
    const getTodo = async() => {
        const data = await axios.get('http://localhost:3000/api/v1/todo', {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
        // console.log(data.data.todo);
        
// @ts-ignore
        setTodolist([...data.data.todo])
    }
    console.log(todolist);
    
    useEffect(() => {
        getTodo()
      const interval = setInterval(() => {
        getTodo()
      }, 5000);
    
      return () => {
        clearInterval(interval)
      }
    }, [])
    
    return <div>
        <ul>
            {todolist.map((t, index) => (
                <div key={index}>
                    <li>title : {t.title}</li>
                    <li>description : {t.description}</li>
                </div>
            ))}
        </ul>
    </div>
}