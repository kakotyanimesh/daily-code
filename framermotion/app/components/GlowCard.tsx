import { motion } from "motion/react"

export const GlowCard = () => {
    const glowVariants = {
        initial : {
            opactity : 0
        },
        hover : {
            opacity : 1,
            backgroundColor : "#fff"
        }
    }
    return (
        <div className="border-2">
            <motion.div className=" size-44 rounded-md" variants={glowVariants} animate={{scale : 1}}>

            </motion.div>
        </div>
        
    )
}