import React from 'react'
import Icons from '../Icons'

const Page1 = () => {
  return (
    <div className='relative h-screen bg-[url("https://images.unsplash.com/photo-1600185365483-26d7a4cc7519")] bg-cover bg-center'>
      <div className='absolute inset-0 bg-white/70 md:bg-white/40'></div>
      <div className='relative z-10 flex items-center h-full px-5 md:px-16'>      
        <div className='max-w-xl text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-black mb-4'>
            Welcome to My App
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-slate-600 mb-6'>
            This is a sample page with a background image.
          </p>
          <button className='bg-blue-500 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-600 transition'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page1