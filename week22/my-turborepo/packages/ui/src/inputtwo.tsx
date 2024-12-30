interface inputProps {
    placeholder : string
}


export const InputTwo = ({placeholder } : inputProps) => {
    return <input type="text" placeholder={placeholder} />
}

