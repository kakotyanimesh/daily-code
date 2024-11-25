import { PlusIcon } from '../assets/Icons/PlusIcon'
import { ButtonComponent } from '../components/Button'
import { InputBox } from '../components/InputBox'

const Home = () => {
  return (
    <div className='font-Hoover place-items-center pt-36'>
        <h1 className='sm:text-5xl text-xl'>Welcome to Unecessary Chat App </h1>
        <div className='mt-10 flex flex-col gap-10 items-center'>
            <InputBox placeholder='Enter RoomId' varients='default'/>
            {/* <InputBox placeholder='Chat box' varients='chatBox'/> */}
            <ButtonComponent size='md' varients='primary' title='Enter' icon={<PlusIcon size='md'/>}/>
            
        </div>
        

    </div>
  )
}

export default Home