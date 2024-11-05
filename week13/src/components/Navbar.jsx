import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-20 mt-10'>
         
            <Link to='/dayOne'>day One</Link>
            <Link to='/dayOne'>day Two</Link>
            <Link to='/dayOne'>day Three</Link>
            <Link to='/dayOne'>day Four</Link>
            <Link to='/dayOne'>day Five</Link>
        
    </div>
  )
}

export default Navbar