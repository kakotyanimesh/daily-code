
interface TextInterface {
    placeholder : string
}

export const InputCompo = ({placeholder} : TextInterface) => {
    return <input type="text" placeholder={placeholder} style={{width : "30vh", padding : "10px"}} />
}