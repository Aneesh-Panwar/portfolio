import React from 'react'
import ZoomableImage from './ZoomableImage'

export default function Head() {
  return (
    <div className='flex justify-between  flex-col p-4'>
        {/* <div className='h-20 overflow-hidden backdrop-blur-lg bg-gray-900/30 mb-2'>
            <img src="./logos/silverF.png" alt="logo" className='h-full object-cover  rounded-[50%]' />
        </div> */}

        <div className='flex items-center gap-4'>
            <ZoomableImage src={"./images/profile.jpg"} />

            <div>
                <h3 className='text-2xl'>Aneesh Panwar</h3>
                <p className='text-gray-400'>Programmer & Developer</p>
            </div>
        </div>
        <div className='w-full h-[1px] bg-white my-4'></div>

    </div>
  )
}
