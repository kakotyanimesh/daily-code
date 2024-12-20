'use client'

import { motion } from "motion/react"
export default function AdvancedComponets() {
    return (
        <div className="flex flex-col justify-center items-center text-center">
            <h1 className="bg-sky-600">scroll animation</h1>
            <div className="flex flex-col space-y-56">
                <Card parentColor="#0891b2" childColor="#be185d"/>
                <Card parentColor="#881337" childColor="#f59e0b"/>
                <Card parentColor="#0284c7" childColor="#c084fc"/>
                <Card parentColor="#facc15" childColor="#15803d"/>
                <Card parentColor="#e0e7ff" childColor="#c2410c"/>
                <Card parentColor="#4a044e" childColor="#047857"/>
                <Card parentColor="#e9d5ff" childColor="#fb7185"/>
            </div>
            
        </div>
    )
}


const Card = ({parentColor, childColor} : CardInterface) => {

    const initial = {
        x : -100,
        opacity : 0
    }

    const final = {
        x : 1,
        opacity : 1
    }

    const childInitial = {
        y : -200,
        opacity : 0
    }

    const childFinal = {
        y: 1,
        opacity : 1
    }
    return (
        <motion.div initial={initial} whileInView={final} whileHover={{boxShadow : `0px 0px 100px ${parentColor}`}} animate={{transition : {delay : 2, ease : 'easeIn'}}} style={{ backgroundColor : parentColor}} className={`w-72 h-52 rooundd-md relative text-center flex justify-center rounded-tl-[90%] rounded-tr-[30%]`}>
            <motion.div initial={childInitial} whileInView={childFinal} whileHover={{boxShadow : `0px 0px 140px ${childColor}`}} animate={{transition : {delay : 3, ease : 'backOut'}}} style={{backgroundColor : childColor}} className={` h-24 w-56 rounded-t-3xl bottom-0 absolute`}>
            </motion.div>
        </motion.div>
    )
}

interface CardInterface {
    parentColor: string,
    childColor : string
}