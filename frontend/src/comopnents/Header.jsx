import React from 'react'

export const Header = () => {
  return (
    <header className='bg-blue-100 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6 m-6'>
      <div className='flex justify-between items-center gap-12'>
        <h1 className='text-2xl font-bold text-gray-800 ml-6 cursor-pointer'>My App</h1>
        <nav>
          <ul className='flex space-x-7'>
            <li><a href='/' className='text-gray-800 hover:text-gray-600 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/20'>Home</a></li>
            <li><a href='/about' className='text-gray-800 hover:text-gray-600 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/20'>About</a></li>
            <li><a href='/contact' className='text-gray-800 hover:text-gray-600 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/20'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )  
}


