interface InputInterface {
    placeholder : string
    ref ?: React.RefObject<HTMLInputElement>
}


export const Input = ({placeholder, ref} : InputInterface) => {
    return <input type="text" placeholder={placeholder} ref={ref} />
}