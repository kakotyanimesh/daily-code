
import Button from "./button"
import InputElememt from "./InputElements"



interface AuthPageProps {
    isSignUp : boolean
    emailRef : React.Ref<HTMLInputElement>
    passwordRef : React.Ref<HTMLInputElement>
    nameRef ?: React.Ref<HTMLInputElement>
    onclickfn : (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function AuthPage ({isSignUp, emailRef, passwordRef, nameRef, onclickfn} : AuthPageProps) {

    return (

        <div className="flex justify-center items-center text-center min-h-screen">
            <div className="flex flex-col space-y-2">
                {isSignUp ? <InputElememt type="name" placeholder="username"Ref={nameRef}/> : ""}
                <InputElememt type="name" placeholder="email" Ref={emailRef}/>
                <InputElememt type="password" placeholder="password" Ref={passwordRef}/>
                {
                    isSignUp ? 
                        <Button title="signup" onclick={onclickfn}/> 
                    :
                        <Button title="signin" onclick={onclickfn}/>

                }
            </div>
            
        </div>
    )
}