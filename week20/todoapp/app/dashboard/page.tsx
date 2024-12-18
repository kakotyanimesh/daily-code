'use client'

import { DisplayTodo } from "../components/DisplayTodo";
import { TodoInputBox } from "../components/TodoInputbox";

export default function Dashboard() {
    return <div className="flex flex-col justify-center items-center">
        <h1>NOT YOUR RANDOM TODO </h1>
        <p className="">first next js app will improve it by time </p>
        <TodoInputBox/>
        <DisplayTodo/>
    </div>
}