import logo from '../assets/react.svg'
export const ChitChat = ({h1Text, Ptext}) => {
    return  (
        <div className='flex items-center p-6 rounded-xl mx-aut gap-4 bg-white'>
            <div className=''>
                <img src={logo} alt="" className='sm:size-14 size-10'/>
            </div>
            <div className='space-y-2'>
                <h4 className=' sm:text-xl text-sm text-black'>{h1Text} </h4>
                <p className='sm:text-sm text-xs text-slate-500'>{Ptext} </p>
            </div>
        </div>
    )
}