import React from 'react'

export default function SecLayout({heading,Component}) {
  return (
    <div className='relative p-3'>
      <div className='flex items-center'>
        <h3 className='sm:border-b-1 min-w-fit sm:border-cyan-500
        capitalize sm:absolute top-0 sm:left-10 text-gray-400 sm:bg-gray-800 rounded-2xl 
        px-4 py-0.5 text-2xl sm:text-[16px] font-wallpoet '>{heading}</h3>
        <div className='h-0.5 bg-gray-700 w-full sm:hidden'></div>
      </div>
        <div className='bg-black py-8 sm:px-5 px-2 sm:border-1 rounded-lg border-gray-500 '>
            <Component/>
        </div>
    </div>
  )
}
