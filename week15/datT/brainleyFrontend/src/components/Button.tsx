import { ReactElement } from "react"
import { StartIcon } from "../Icons/StartIcon"

interface buttonInterface {
    variants : 'primary' | 'secondary',
    title : string,
    startIcon ?: ReactElement,
    endIcon ?: ReactElement
    size : 'sm' | 'md' | 'lg'
}

const variantsStyles = {
    'primary' : 'bg-purple-600 text-white',
    'secondary' : 'bg-purple-300 text-purple-600' 
}

const sizeStyle = {
    'sm' : 'py-2 px-1 rounded-sm',
    'md' : 'px-4 py-3 rounded-md',
    'lg' : 'px-5 py-4 rounded-lg'
}

export const Button = (props : buttonInterface) => {
    return (
        <button className={`${variantsStyles[props.variants]} ${sizeStyle[props.size]}`}>
            <div className="flex items-center gap-2">
            {props.startIcon}
            {props.title}
            {props.endIcon}
            </div>
        </button>
    )
}