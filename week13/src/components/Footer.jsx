import { Link } from "react-router-dom"
import { ForwardIcon, BackwardIcon } from '@heroicons/react/24/outline'

export const Footer = ({prevLink, nextLink}) => {
    return (
        <div className="flex  gap-32 justify-between mx-20 text-2xl pb-10">
            <Link to={prevLink} className="">
                <BackwardIcon className="size-6"/>
                prev
            </Link>
            <Link to={nextLink}>
                <ForwardIcon className="size-6"/>
                next
            </Link>
        </div>
    )
}