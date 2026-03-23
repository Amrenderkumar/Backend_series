import React from 'react'
import Icons from './Icons'

const Middle = () => {
    return (
        <div className='relative h-screen m-6 rounded-2xl shadow-lg blur-backdrop-md border border-white/30'>
            <div className='flex justify-start items-center h-1/2 px-6 pl-35'>
                <h2 className=' text-4xl font-bold mt-auto'>Demo Website</h2>
            </div>
            <div className='px-6 pl-35'>
                <p className='text-left text-black font-medium  mt-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium quibusdam dolores alias. <br /> Saepe excepturi possimus est nulla repellat recusandae ut, porro mollitia aut ullam fuga <br /> nesciunt nisi qui at fugit delectus labore laboriosam quod quibusdam! Aliquid veritatis eligendi officiis!</p>
                <button className='bg-blue-500 text-white py-3 px-5 mt-8 rounded-lg hover:bg-blue-600'>Get Started</button>
            </div>
            <div className='h-1/2 absolute top-40 right-10'>
                <Icons />
            </div>
        </div>
    )
}

export default Middle
