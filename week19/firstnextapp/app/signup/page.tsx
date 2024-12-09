const Signup = () => {
    return <div className="flex min-h-screen justify-center  items-center">
        <div className="border min-w-54 p-5 rounded-md space-y-4 shadow-md shadow-slate-200   ">
            <h1 className="text-center font-bold text-xl">SignUp</h1>
            <Inputs placeholder="username"/>
            <Inputs placeholder="password"/>
            <Button title="signUp"/>
        </div>
    </div>
}

interface InputInterface {
    placeholder : string
}

const Inputs = (props : InputInterface) => {
    return <div className="flex flex-col w-fit">
        <label className="font-semibold mb-2">{props.placeholder}</label>
        <input type="text" placeholder={props.placeholder} className="w-full px-4 py-1 rounded-sm border-slate-200 border bg-slate-50"/>
    </div>
}


const Button = (props : {title : string}) => {
    return <button className="rounded-md bg-black text-white w-full py-1">
        {props.title}
    </button>
}

export default Signup