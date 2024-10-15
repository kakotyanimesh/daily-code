import React from 'react'

const Model = ({isOpen, onClose, children }) => {
    // is open and onClose are functions 
  return (
    <div className='bg-pink-400 flex items-center'>
        <button onClick={onclose} className='bg-red-300 rounded-xl'>close </button>
        {children}
    </div>
  )
}

export default Model