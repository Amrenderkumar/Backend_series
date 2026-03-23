import React from 'react'
import Img from '../assets/prog.webp'
const Icons = () => {
  return (
    <div className='flex justify-end '>
      <img className='h-120 w-120 rounded-full object-cover transition duration-300 hover:scale-x-[-1]' src={Img} alt="Icon" />
    </div>
  )
}

export default Icons
