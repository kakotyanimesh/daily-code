
import React from "react"

export const InputBox = ({placeholder,onchange , type} : InputBoxInterface) => {
    return (
        <div className="flex flex-col space-y-1 text-xl text-slate-500">
            <label htmlFor="">{placeholder}</label>
            <input type={type} placeholder={placeholder} className="px-3 py-1 rounded-md border-2 border-slate-300 shadow-md focus:ring-slate-500" onChange={onchange} />
        </div>
    )
}


interface InputBoxInterface {
    placeholder : string,
    onchange : React.ChangeEventHandler<HTMLInputElement>,
    type : string

}