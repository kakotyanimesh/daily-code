'use client'

import {motion} from 'motion/react'
import Link from 'next/link';
export default function Home() {
  return (

    <div className="text-3xl space-y-4 flex flex-col justify-center items-center">
      <motion.h1>Framer motion guide</motion.h1>
      <LinkTag title='dayOne' href='/dayOne'/>
      <LinkTag title='advanced' href='/advanced'/>
    </div>
  );
}


const LinkTag = ({href, title} : {href : string, title : string}) => {
  return (
    <motion.div whileTap={{boxShadow : "0px 0px 90px #fff"}} animate={{ scale : 1.1, transition : {delay : 0.3, ease : 'easeIn'}}}>
      <Link href={href} className='bg-blue-800 p-1 rounded-md'>{title}</Link>
    </motion.div>
  )
}