import React from 'react'
import ZoomableImage from './ZoomableImage'
import DateTime from './DateTime'
import Social from './Social'

export default function Head() {
  return (
    <div className='flex justify-between flex-col p-4 font-wallpoet'>
        {/* <div className='h-20 overflow-hidden backdrop-blur-lg bg-gray-900/30 mb-2'>
            <img src="./logos/silverF.png" alt="logo" className='h-full object-cover  rounded-[50%]' />
        </div> */}

        <div className='flex items-center gap-4'>
            <div className='h-20 w-20'>
             <ZoomableImage src={"./images/profile.jpg"} className='w-20 h-20'/>
            </div>

            <div className='w-full'>
                <h3 className='text-xl'>Aneesh Panwar <img src="./logos/f3.svg" alt="🌻"  className="h-5 inline"/>
                </h3>
                <p className='text-gray-400 text-sm'>Programmer & Developer</p>
                <div className='flex  flex-wrap w-full gap-1 justify-between items-center'>
                  <span className='text-sm bg-green-600 px-2 font-jura end rounded-sm '>Available</span>
                  <DateTime/>
                </div>
            </div>
        </div>
        <div className='w-full h-[1px] bg-white my-4'></div>

        <div className='mt-4 mb-10'>
          <Social/>
        </div>
    </div>
  )
}
