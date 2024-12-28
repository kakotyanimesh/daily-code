'use client'

// import { motion } from "motion/react"
// import { useState } from "react"
// export default function AdvancedComponets() {
//     const [title, settitle] = useState('click')

//     const [bgColor, setBgColor] = useState(`{hsl(${Math.floor(Math.random() * 360)}, 70%, 97%)}`)
//     const [angle, setAngle] = useState(0)

//     const randomColor = () => {
//         setBgColor(`hsl(${Math.floor(Math.random() * 360)}, 80%, 50%)`)
//         setAngle(angle + 45)
        
        
//     }
//     const clickme = () => {
//         settitle('clicked')
//     }
//     return (
//         <div className="flex flex-col justify-center items-center text-center">
//             <h1 className="bg-sky-600">scroll animation</h1>
//             <div className="flex flex-col space-y-56">
//                 <Card parentColor="#0891b2" childColor="#be185d"/>
//                 <Card parentColor="#881337" childColor="#f59e0b"/>
//                 <Card parentColor="#0284c7" childColor="#c084fc"/>
//                 <Card parentColor="#facc15" childColor="#15803d"/>
//                 <Card parentColor="#e0e7ff" childColor="#c2410c"/>
//                 <Card parentColor="#4a044e" childColor="#047857"/>
//                 <Card parentColor="#e9d5ff" childColor="#fb7185"/>
//             </div>

//             <motion.div whileHover={{backgroundColor : "#0891b2", boxShadow : "0px 0px 100px #881337"}} className="mt-44 bg-blue-300 flex flex-col gap-32 items-center justify-center w-72 rounded-xl h-64 ">
//                 <motion.h1 whileHover={{rotate : 357}} className="text-4xl text-green-700 font-bold">Glow card</motion.h1>
//                 <motion.button onTap={clickme}>{title}</motion.button>
//             </motion.div>

//             <div className="my-44 bg-blue-400 size-[600px] rounded-[100px] relative">
//                 <motion.div className="size-[180px] bg-red-400 left-[45%] top-[20%] rounded-3xl absolute" onTap={randomColor} animate={{backgroundColor : bgColor, boxShadow : `0px 0px 100px ${bgColor}`, rotate : angle}}>

//                 </motion.div>

//             </div>
            
//         </div>
//     )
// }


// const Card = ({parentColor, childColor} : CardInterface) => {

//     const initial = {
//         x : -100,
//         opacity : 0
//     }

//     const final = {
//         x : 1,
//         opacity : 1
//     }

//     const childInitial = {
//         y : -200,
//         opacity : 0
//     }

//     const childFinal = {
//         y: 1,
//         opacity : 1
//     }
//     return (
//         <motion.div initial={initial} whileInView={final} whileHover={{boxShadow : `0px 0px 100px ${parentColor}`}} animate={{transition : {delay : 2, ease : 'easeIn'}}} style={{ backgroundColor : parentColor}} className={`w-72 h-52 rooundd-md relative text-center flex justify-center rounded-tl-[90%] rounded-tr-[30%]`}>
//             <motion.div initial={childInitial} whileInView={childFinal} whileHover={{boxShadow : `0px 0px 140px ${childColor}`}} animate={{transition : {delay : 3, ease : 'backOut'}}} style={{backgroundColor : childColor}} className={` h-24 w-56 rounded-t-3xl bottom-0 absolute`}>
//             </motion.div>
//         </motion.div>
//     )
// }

// interface CardInterface {
//     parentColor: string,
//     childColor : string
// }