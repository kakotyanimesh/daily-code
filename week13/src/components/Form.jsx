import { useState } from "react"

export const FormComponent = () => {

    const [data, setData ] = useState({
        username : '',
        email : ''
    })

    const Submitform = (e) => {
        const {name, value} = e.target
        setData((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    return (
        <div className="pb-10">
            <label htmlFor="" className="flex gap-10">
                <span>username</span>
                <InputFied type='email' name='username' value={data.username} onChange={Submitform}/>
                <InputFied type='text' name='email' value={data.email} onChange={Submitform}/>
            </label>

        </div>
    )
}


const InputFied = ({type, name, value, onChange}) => {
    return (
        <input type={type}
            value={value}
            onChange={onChange}
            name={name}
        className="text-black w-full rounded-xl bg-blue-200 px-5 py-1 sm:text-xl focus:invalid:text-red-500  invalid:text-red-950" />
    )   
}