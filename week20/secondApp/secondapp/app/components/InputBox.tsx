interface InputBoxInterface {
    placeholder :  string,
    type : string
    onChange? : React.ChangeEventHandler<HTMLInputElement>
}


export const InputBox = ({placeholder, type, onChange} : InputBoxInterface) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={placeholder}>{placeholder}</label>
            <input type={type} className="px-2 py-1 rounded-md ring-2 ring-blue-500 text-blue-800" placeholder={placeholder} onChange={onChange} />
        </div>
    )
}