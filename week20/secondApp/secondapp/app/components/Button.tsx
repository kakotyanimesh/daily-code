interface ButtonInterface {
    title : string, 
    onClick? : React.MouseEventHandler<HTMLInputElement>
}

export const Button = ({title, onClick} : ButtonInterface) => {
    return (
        <div className="cursor-pointer text-center bg-blue-800 rounded-md py-1" onClick={onClick}>
            {title}
        </div>
    )
}