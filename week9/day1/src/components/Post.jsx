import React from 'react'

const Post = ({name, subtitle,  image, time, description }) => {
  return (
    <div>
        <div className='flex'>
            <div>
                <img src={image} alt="" srcset="" className='w-20 h-20'/>
            </div>
            <div>
                <b>{name}</b> <br />
                <p>{subtitle}</p>
                {time ? 
                    <div>
                        {time}
                        <img src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas=" alt="" className='w-12 h-12'/>
                    </div>
                : undefined}

            </div>
        </div>
        <div>
            {description}
        </div>
    </div>
  )
}

export default Post