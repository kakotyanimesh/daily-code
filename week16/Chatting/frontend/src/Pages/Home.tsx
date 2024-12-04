import { useNavigate } from 'react-router-dom'
import { PlusIcon } from '../assets/Icons/PlusIcon'
import { ButtonComponent } from '../components/Button'
import { InputBox } from '../components/InputBox'
import { useRef } from 'react'

const Home = () => {
    const inputRef = useRef()
    const navigate = useNavigate()
    const enterRoom = () => {
        const wss = new WebSocket('ws://localhost:8080')

        {/* @ts-ignore */}
        const roomId = inputRef.current?.value
        wss.onopen = () => {
            wss.send(JSON.stringify({
                "type" : "join",
                "payload" : {
                    "room" : roomId
                }
            }))
        }
        navigate('/chat')
    }
  return (
    <div className='font-Hoover place-items-center pt-36'>
        <h1 className='sm:text-5xl text-xl'>Welcome to Unecessary Chat App </h1>
        <div className='mt-10 flex flex-col gap-10 items-center'>
            {/* @ts-ignore */}
            <InputBox placeholder='Enter RoomId' varients='default' ref={inputRef} />
            {/* <InputBox placeholder='Chat box' varients='chatBox'/> */}
            
            <ButtonComponent size='md' varients='primary' title='Enter' icon={<PlusIcon size='md'/>} onclick={enterRoom} />
            
        </div>
        

    </div>
  )
}

export default Home