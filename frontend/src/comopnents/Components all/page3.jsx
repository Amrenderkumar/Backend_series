import Page3card from "./page3card"

const page3 = () => {
  return (
    <div className='bg-gray-200 w-full px-4 py-6 sm:px-6 lg:px-10'>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-stretch'>
        <div className='w-full  text-white p-4  md:p-6 lg:w-1/2 lg:p-8'>
          <div className='overflow-hidden rounded-xl bg-black'>
            <video
              className='h-52 w-full object-cover sm:h-64 md:h-72 lg:h-80'
              src='https://www.w3schools.com/html/mov_bbb.mp4'
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controlsList='nodownload nofullscreen noplaybackrate'
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div className='w-full  p-4 md:p-6 lg:w-1/2 lg:p-8'>
          <Page3card />
        </div>
      </div>
    </div>
  )
}

export default page3
