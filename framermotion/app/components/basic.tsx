'use client'

// import { easeIn, easeOut } from 'motion'
import { motion } from 'motion/react'
import { useState } from 'react'

export default function Basic() {
    const [degreee, setDegreee] = useState(0)
    const [boxShadow, setBoxShadow] = useState("0px 0px 0px #000")
    const [draggable, setDraggable] = useState(false)


    const adddegree = () => {
        setDegreee(degreee + 95)
        setBoxShadow("0px 0px 20px #fff")
    }
    // const initial = {
    //     top : 56,
    //     left : 56
    // }
    
    const [oneState, setOneState] = useState({rotate : 0, scale : 1, boxShadow : "0px 0px 50px #34d399"})

    
    const final = {
        top : 10,
        left : 10,
        backgroundColor : '#ffff',
        rotate : 50,
        scale : 0.5,
        transition : {duration : 1, ease : 'easeIn'}
    }
    return (
        <div className='flex flex-col justify-center text-center items-center'>

        
        <div className='grid sm:grid-cols-3 grid-row-2 justify-center items-center  space-y-14 sm:space-x-44'>
            <div className="bg-yellow-300 size-56 relative rounded-md flex justify-center items-center " style={{perspective : 600}}>
                <motion.div className="bg-red-700 size-20 absolute rounded-md" animate={final}>

                </motion.div>
                <motion.div className='bg-blue-600 size-20 rounded-full absolute' animate={{x: -40, y: 40, scaleX : 0.5, scaleY : 1, skewX: 10}}>

                </motion.div>
                <motion.div className='bg-green-900 size-10 rounded-lg top-32 right-2 absolute' animate={{rotateX: 360, transition: {delay: 1, ease: 'easeOut'}}}>

                </motion.div>
            </div>

            <div className='bg-slate-400 size-72 rounded-md relative flex flex-col justify-center items-center'>
                <motion.div className='bg-blue-400 size-24 rounded-md absolute top-10 left-5' animate={{backgroundColor : '#ff6347', rotate : 360, transition: {delay : 1, ease : 'easeInOut'}}}></motion.div>
                <motion.div className='bg-green-400 size-24 rounded-md absolute top-20 left-14' animate={{backgroundColor : 'hsl(290, 50%, 60%)', rotate : 189, transition :{delay : 2, ease : 'easeIn'}}}></motion.div>
                <motion.div className='bg-pink-400 size-24 rounded-md absolute top-28' animate={{backgroundColor: 'rgba(153, 204, 102, 0.8)', rotate : 45, transition: {delay : 3, ease : 'easeOut'}}}></motion.div>
            </div>

            <div className='bg-blue-400 size-72 rounded-md flex justify-center items-center relative'>
                <motion.div className='bg-green-500 size-24 text-center items-center flex cursor-pointer rounded-lg' whileTap={{boxShadow : "0px 0px 80px #fff", transition: {delay : 0.1, repeat : Infinity, ease : 'easeIn'}}}>
                    <h1>click me daddy</h1>
                </motion.div>
                <motion.div className='bg-pink-500 size-32 rounded-md flex items-center text-center' whileHover={{rotate : 45, scale : 3, transition : {delay : 0.2, ease : 'easeIn'}, boxShadow : "0px 0px 100px #f9a8d4"}}>
                    <h1>my dick as soon she touch</h1>
                </motion.div>
            </div>

            
        </div>
        <div className='flex justify-center items-center text-center'>
            <motion.div className='flex flex-col justify-center items-center w-10 my-80 cursor-pointer' initial={{}} whileHover={{scale : 2,boxShadow : "0px 0px 80px #818cf8",transition : {delay : 0.1, ease : 'easeIn'}}}>
                <div className='bg-slate-400 size-20 rounded-t-[50%] rounded-b-[15px]'>

                </div>
                <div className='bg-slate-400 w-20 h-32 rounded-t-[20px] rounded-b-[10px]'>

                </div>
                <div className='flex flex-row'>
                    <div className='bg-slate-400 size-20 rounded-tl-[100px] rounded-b-[30px]'></div>
                    <div className='bg-slate-400 size-20 rounded-tr-[100px] rounded-b-[30px]'></div>
                </div>
            </motion.div>
        </div>


        <div className=' space-y-10 text-3xl flex flex-col text-center items-center mx-40'>
            <h1>add state to element tap to see it , used the usestate hook for both boxshadow and rotate and use the ontap from framer </h1>
            <div className='bg-red-900 relative size-96 flex justify-center items-center rounded-md'>
                <motion.div className='absolute size-40  bg-blue-900 rounded-md cursor-pointer' animate={{rotate : degreee, boxShadow : boxShadow}} onTap={adddegree}>
                    
                </motion.div>
            </div>
        </div>

            <div className='bg-green-900 size-96 relative mt-40 rounded-2xl'>
                <motion.div animate={oneState} onTapStart={() => setOneState({ scale : 0.5, rotate : 90, boxShadow: "0px 0px 100px #34d399"})}  onTap={() => setOneState({scale : 1, rotate : 0 , boxShadow : '0px 0px 100px #701a75'})} className='bg-pink-950 size-40 top-32 rounded-md absolute left-3/4' >
                    
                </motion.div>
            </div>
            
            <h1 className='mt-40'>DRAGGINB COMPONNENT</h1>
            <motion.div className={`relative ${draggable ? 'bg-red-300' : 'bg-pink-400'} size-72`}>
                <motion.div className='absolute size-24 bg-red-100'>
                    
                </motion.div>
            </motion.div>
        </div>
    )
}