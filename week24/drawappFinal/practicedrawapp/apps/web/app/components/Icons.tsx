import { ReactNode } from "react"

interface ButtonType {
    Icons : ReactNode,
    onclick : (event : React.MouseEvent<HTMLButtonElement | MouseEvent>) => void
}


export const ButtonIcons = ({Icons, onclick }: ButtonType) => {
    return (
         <button onClick={onclick}>
            {Icons}
        </button>
    )
}