import React from 'react'
import Img from '../assets/prog.webp'
const Icons = () => {
  return (
    <div className='flex justify-end md:h-120 h-40 w-40 md:w-120'>
      <img className='rounded-full object-cover transition duration-300 hover:scale-x-[-1]' src={Img} alt="Icon" />
    </div>
  )
}

export default Icons
