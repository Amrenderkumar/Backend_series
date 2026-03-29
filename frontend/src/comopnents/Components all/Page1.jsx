import React from 'react'
import Icons from '../Icons'

const Page1 = () => {
  return (
    <div className='w-full min-h-screen px-4 py-6'>
      
      <div className='flex flex-col md:flex-row items-center justify-between 
      bg-gray-100 rounded-2xl shadow-lg p-6 md:p-10 gap-6'>
        
        {/* Icon Section */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <Icons className='h-40 md:h-full' />
        </div>

        {/* Text Section */}
        <div className='w-full md:w-1/2 text-center md:text-left'>
          <h1 className='text-2xl md:text-4xl font-bold'>
            Welcome to My Page
          </h1>
          <p className='mt-4 text-gray-600 text-sm md:text-base'>
            This is a sample page to demonstrate the layout.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Page1