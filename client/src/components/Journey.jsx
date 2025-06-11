import React from 'react'

export default function Journey() {
  return (
    <div>
        <div className='ml-6 mt-6  relative'>
            <div className=' transform rotate-270 -left-10 top-6 absolute text-[12px]'>2022-2025</div>
            <div className='h-4 w-4 bg-amber-950 rounded-[50%] absolute -top-4 -left-[5px]'></div>
            <div className='h-20 bg-amber-500 w-1'></div>

            <div className="h-18 w-full bg-[#0b0b0b] absolute -top-1.5 left-2.5 rounded-r-lg overflow-hidden">
                <div className='h-18 bg-gray-900 absolute w-8 rounded-tr-full'></div>
                <span className='absolute right-0.5 top-0 bg-blue-500 text-[12px] px-1 rounded-bl-xl'>Education</span>
                <div className='pl-10 py-1'>
                    <h2 className='capitalize font-bold text-sm'>Diploma in Computer-science & engineering</h2>
                    <h3 className='text-sm capitalize'>location : Dehradun</h3>
                    <h3 className='text-sm capitalize'>Govt. Inter. College dwara</h3>
                </div>
            </div>
        </div>

        <div className='ml-6 mt-4 relative'>
            <div className=' transform rotate-270 -left-10 top-6 absolute text-[12px]'>2022-2025</div>
            <div className='h-4 w-4 bg-amber-950 rounded-[50%] absolute -top-4 -left-[5px]'></div>
            <div className='h-20 bg-amber-500 w-1'></div>

            <div className="h-18 w-full bg-[#0b0b0b] absolute -top-1.5 left-2.5  rounded-r-lg ">
                <div className='h-18 bg-gray-900 absolute w-8 rounded-tr-full'></div>
                <div className='pl-10 py-1'>
                     hello
                </div>
            </div>
        </div>
    </div>
  )
}
