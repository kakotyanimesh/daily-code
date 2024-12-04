
interface InputBoxInterface {
    placeholder : string,
    varients : 'chatBox' | 'default',
    // size : 'lg' | 'sm' | 'md',
    ref ?: React.RefObject<HTMLInputElement>
}

// type for ref => React.RefObject<HTMLInputElement>



const varientsStyle = {
    'chatBox' : 'sm:w-60 pl-4 rounded-md',
    'default' : 'inline-block w-auto py-3 text-center rounded-md' 
}

export const InputBox = (props : InputBoxInterface) => {
    return (
        <input 
            type="text"
            placeholder={`${props.placeholder}`}
            className={`${varientsStyle[props.varients]}`}
            ref = {props.ref}
        />

    )
}

