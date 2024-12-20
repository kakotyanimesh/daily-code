'use client'

import {motion} from 'motion/react'
import Link from 'next/link';
export default function Home() {
  return (

    <div className="text-3xl space-y-4 flex flex-col justify-center items-center">
      <motion.h1>Framer motion guide</motion.h1>
      <LinkTag title='dayOne' href='/dayOne'/>
    </div>
  );
}


const LinkTag = ({href, title} : {href : string, title : string}) => {
  return (
    <Link href={href} className='bg-blue-800 p-1 rounded-md'>{title}</Link>
  )
}