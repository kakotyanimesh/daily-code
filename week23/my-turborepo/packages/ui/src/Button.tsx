import React from "react"

interface ButtonProps {
    title : string
    onclick : (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    varientType : "primary" | "default"
}


const Varients = {
    "primary" : "ui-bg-gradient-to-r ui-from-slate-500 ui-to-blue-600 ui-via-pink-700 ui-py-2 ui-rounded-md ",
    "default" : "ui-bg-gradient-to-r ui-from-blue-600 ui-red-600 ui-via-yellow-700 ui-py-2 ui-rounded-md"
}

export const Button = ({title, onclick, varientType} : ButtonProps) => {
    return (

        <button onClick={onclick} className={`${Varients[varientType]} ui-w-full hover:ui-shadow-md  hover:ui-shadow-blue-600 ui-transition ui-delay-150`}>
            {title}
        </button>
    )
}