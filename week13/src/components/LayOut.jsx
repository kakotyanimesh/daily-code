import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

const LayOut = () => {
  return (
    <div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayOut