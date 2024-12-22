import { ReactNode } from "react"

export default function Layout({children} : {children : ReactNode}) {
    return <div className="flex flex-col justify-center items-center h-screen">
        <h1>asdasdasd</h1>
        {children}
        <h1>
            <ul>
                <li>first we can name the function as we want</li>
                <li>remember its small children prop not the Capital one</li>
                <li>then dont forget to distructure the child prop with {}</li>
                <li>children is a type of React.ReactNode</li>
            </ul>
        </h1>
    </div>
}

