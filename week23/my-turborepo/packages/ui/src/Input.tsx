import React from "react"

interface InputProps {
    placeholder : string,
    type : string,
    label : string,
    Ref : React.RefObject<HTMLInputElement>
}

export const Input = ({placeholder, type, Ref, label} : InputProps) => {
    return (
        <div className="flex ui-flex-col ui-space-y-2">
            <label htmlFor="label">{label.toLocaleLowerCase()}</label>
            <input className="ui-px-2 ui-py-1 ui-rounded-md focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-slate-600 " type={type} placeholder={placeholder} ref={Ref} />
        </div>
    )
}