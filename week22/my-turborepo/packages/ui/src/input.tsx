interface InputInterface {
    placeholder : string
    inputRef ?: React.RefObject<HTMLInputElement>
}


export const Input = ({placeholder, inputRef} : InputInterface) => {
    return <input type="text" placeholder={placeholder} ref={inputRef} style={{height : "50px" , width : "30vw", padding : "10px", borderRadius : "10px"}}/>
}