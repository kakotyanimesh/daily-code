import React from "react"

interface InputProps {
    placeholder : string
    type : string
    Ref ?: React.Ref<HTMLInputElement>
}


export default function InputElememt ({placeholder, type, Ref} : InputProps) {
    return ( 
        <div className="flex flex-col space-y-7">
            
            <input type={type} ref={Ref} placeholder={placeholder} className="border-blue-700 border-2 rounded-md px-3 py-1 shadow-md shadow-blue-800"/>
        </div>
    )
}
