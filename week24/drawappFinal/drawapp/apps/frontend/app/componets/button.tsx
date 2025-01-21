import React from "react"

interface ButtonProps {
    title : string
    onclick ?: (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Button({title, onclick} : ButtonProps) {
    return (
        <button onClick={onclick} className="bg-blue-800 px-2 py-1 rounded-md">{title}</button>
    )
}