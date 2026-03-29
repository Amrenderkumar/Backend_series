import React from 'react'
import Icons from '../Icons'

const Page1 = () => {
  return (
    <div className='relative h-screen bg-[url("https://images.unsplash.com/photo-1600185365483-26d7a4cc7519")] bg-cover bg-center'>
       <div className='absolute top-80 md:left-30 text-center md:text-left left-5 md:top-90 xl:top-100'>
        <h1 className='text-5xl font-bold text-black mb-4'>Welcome to My App</h1>
        <p className='text-xl text-slate-600 mb-8'>This is a sample page with a background image.</p>
        <button className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200'>Get Started</button>
       </div>
    </div>
  )
}

export default Page1