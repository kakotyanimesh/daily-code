import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className=' flex flex-col justify-center text-center items-center sm:text-3xl text-xl'>
        <h1 className='relative'>
          <span className='absolute bg-green-600 -inset-3 skew-x-2 skew-y-2'></span>  
          <span className='relative'>Taiwind Learnig Page</span>
        </h1>
        <Navbar/>

    </div>
  )
}

export default Home