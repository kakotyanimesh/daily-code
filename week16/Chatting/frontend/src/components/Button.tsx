import { ReactElement } from "react"

interface ButtonInterface {
    title ?: string,
    size : 'lg' | 'sm' | 'md',
    varients : 'primary' | 'secondary',
    icon ?: ReactElement
}


const sizeStyle = {
    lg : 'px-5 h-10',
    sm : 'sm:px-2 h-10',
    md : 'px-2 sm:px-6 h-10'
}

const varientsStyle = {
    'primary' : 'bg-[#1D75DD] rounded-md',
    'secondary' : 'bg-[#A5CEFF] rounded-xl'
}


export const ButtonComponent = (props :  ButtonInterface) => {
    return (
        <button className={`${varientsStyle[props.varients]} ${sizeStyle[props.size]} inline-block`}>
            <div className="flex items-center gap-2">
            {props.icon}
            {props.title}
            </div>
        </button>
    )
}