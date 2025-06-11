import React from 'react'

export default function 
() {
  return (

    <div className='max-w-130 w-[360px] sm:w-full  m-auto text-[9px] sm:text-lg rounded-2xl fixed bottom-4 sm:top-6 transform left-1/2 -translate-x-1/2 z-10 '>
        <ul className='backdrop-blur-lg bg-white/20 sm:shadow-black shadow-white shadow-md flex flex-wrap px-1.5 py-2.5 justify-around gap-2.5 text-gray-300 sm:text-white  rounded-3xl '>
            <div className='flex flex-col items-center cursor-pointer hover:text-gray-600'>
                <img src="./logos/home.svg" alt="" className='h-6 sm:hidden'/>
                <li className='capitalize sm:font-bold'>home</li>
            </div>
            <div className='flex flex-col items-center cursor-pointer hover:text-gray-600'>
                <img src="./logos/home.svg" alt="" className='h-6 sm:hidden'/>
                <li className='capitalize sm:font-bold'>skills</li>
            </div>
            <div className='flex flex-col items-center cursor-pointer hover:text-gray-600'>
                <img src="./logos/home.svg" alt="" className='h-6 sm:hidden'/>
                <li className='capitalize sm:font-bold'>projects</li>
            </div>
            <div className='flex flex-col items-center cursor-pointer hover:text-gray-600'>
                <img src="./logos/home.svg" alt="" className='h-6 sm:hidden'/>
                <li className='capitalize sm:font-bold'>achievements</li>
            </div>
            <div className='flex flex-col items-center cursor-pointer hover:text-gray-600'>
                <img src="./logos/home.svg" alt="" className='h-6 sm:hidden'/>
                <li className='capitalize sm:font-bold'>journey</li>
            </div>

        </ul>
    </div>
  )
}
