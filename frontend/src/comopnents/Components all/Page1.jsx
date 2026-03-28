import React from 'react'
import Icons from '../Icons'

const Page1 = () => {
  return (
      <div className='md:h-[82vh] h-auto w-full '>
        <div className='md:flex justify-between grid items-center m-6 h-full bg-gray-100 rounded-2xl shadow-lg p-10'>
            <div className='items-center ml-14 md:mb-0'>
                <Icons className='h-full '/>
            </div>
            <div>
                <h1 className='text-3xl font-bold text-center mt-10'>Welcome to My Page</h1>
                <p className='text-center mt-4 text-gray-600'>This is a sample page to demonstrate the layout.</p>
            </div>
        </div>
      </div>
  )
}

export default Page1
