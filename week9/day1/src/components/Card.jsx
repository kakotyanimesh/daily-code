import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='border border-red-300 rounded-[5xl] p-20 shadow-slate-500'>
        {children}
    </div>
  )
}

export default Card