"use client "

import React from "react"

interface ButtonProps {
    title : string,
    onclick : React.MouseEventHandler<HTMLButtonElement>
}


export const ButtonCompo = ({title, onclick} : ButtonProps) => {
    return <button onClick={onclick} style={{paddingRight : "30px", paddingLeft : "30px", borderRadius : "10px"}}>
        {title}
    </button>
}