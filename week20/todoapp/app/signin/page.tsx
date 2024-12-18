'use client'

import { AuthenticatedSigIn } from "../components/authenticated";

export default function SignIn(){
    return <div className="flex justify-center h-screen items-center">
        <AuthenticatedSigIn/>
    </div>
}