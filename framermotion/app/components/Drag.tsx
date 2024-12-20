import { motion } from 'motion/react'
import { useState } from 'react'

export const Drag = () => {
    const [dragaable, setDragaable] = useState(false)
    return (
        <motion.div className={`relative ${dragaable ? 'bg-red-800' : 'bg-pink-500'} flex justify-center size-72 items-center`} animate={{transition : {delay : 1, ease : 'easeInOut'}}}>
            <motion.div className={`absolute ${dragaable ? 'bg-blue-900' : 'bg-green-900'} size-24`} drag dragConstraints={{top : -100, left : -140, right : 140, bottom : 40}} onClick={() => setDragaable(true)} onDragEnd={() => setDragaable(false)} >
            </motion.div>
        </motion.div>
    )
}