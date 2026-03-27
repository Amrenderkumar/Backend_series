import React from 'react'

const Demo1 = () => {
    return (
        <div className='m-6'>
            <div className=' max-w-sm mx-auto bg-black text-white rounded-xl overflow-hidden md:max-w-xl'>
                <div className='md:flex'>
                    <div>
                        <img className='h-48 w-full object-cover md:h-full md:w-48' src="https://wallpapers.com/images/hd/random-people-walking-on-a-rainy-day-xibhqyyfg4prdneg.jpg" alt="" />
                    </div>
                    <div className='p-8'>
                        <h1 className='md:text-yellow-800 font-medium text-xl hover:text-violet-800 cursor-pointer'>Title Content</h1>
                        <p className='text-slate-400'>This is the description for the demo component</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo1
