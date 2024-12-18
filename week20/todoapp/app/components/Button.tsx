import React from "react"

export const ButtonElement = ({title, onclick} : ButtonInterface) => {
    return <div className="cursor-pointer bg-blue-300 text-center py-2 rounded-md text-blue-900 font-bold" onClick={onclick}>
        {title}
    </div>
}


interface ButtonInterface {
    title : string,
    onclick : React.MouseEventHandler<HTMLInputElement>
}