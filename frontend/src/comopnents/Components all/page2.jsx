import React from 'react'

const Page2 = () => {
  return (
    <div className='bg-slate-300 w-full h-52 flex items-center justify-center px-10 bg-[url("https://clipground.com/images/website-background-patterns-clipart-2.jpg")] bg-cover bg-center'>
      <div className='grid grid-cols-3 gap-6 w-full text-center'>
        <div>
          <p className='text-3xl font-bold text-black'>Production</p>
          <p className='text-black mt-2 text-2xl'>20 mill/year</p>
        </div>
        <div>
          <p className='text-3xl font-bold text-black'>Recycling</p>
          <p className='text-black mt-2 text-2xl'>30%</p>
        </div>
        <div>
          <p className='text-3xl font-bold text-black'>Waste</p>
          <p className='text-black mt-2 text-2xl'>9-18 mill/year</p>
        </div>
      </div>
    </div>
  )
}

export default Page2