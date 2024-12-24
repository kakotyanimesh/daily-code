import { ReactNode } from "react";

export default function RootLayout({children} : { children : ReactNode}){
    return <div className="bg-slate-600 min-h-screen">
        {children}
    </div>
}