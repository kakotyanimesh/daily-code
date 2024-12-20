'use client'

// import { easeIn, easeOut } from 'motion'
import { motion } from 'motion/react'

export default function Basic() {

    // const initial = {
    //     top : 56,
    //     left : 56
    // }

    const final = {
        top : 10,
        left : 10,
        backgroundColor : '#ffff',
        rotate : 50,
        scale : 0.5,
        transition : {duration : 1, ease : 'easeIn'}
    }
    return (
        <div>

        
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
            <motion.div className='flex flex-col justify-center items-center my-80 cursor-pointer' whileHover={{scale : 2, transition : {delay : 0.2, ease : 'easeIn'}}}>
                <div className='bg-slate-400 size-20 rounded-t-[50%] rounded-b-[15px]'>

                </div>
                <div className='bg-red-400 w-20 h-32 rounded-t-[20px] rounded-b-[10px]'>

                </div>
                <div className='flex flex-row'>
                    <div className='bg-blue-500 size-20 rounded-tl-[100px] rounded-b-[30px]'></div>
                    <div className='bg-blue-500 size-20 rounded-tr-[100px] rounded-b-[30px]'></div>
                </div>
            </motion.div>
        </div>
    )
}