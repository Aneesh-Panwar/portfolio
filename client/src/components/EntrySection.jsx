import React from 'react'

export default function EntrySection() {
  return (
    <div>
        {/* banner */}
        <div className="h-30 sm:h-60 opacity-50">
            <img src="./images/banner.jpg" alt="could'nt load banner" className='h-full w-full object-cover'/>
        </div>

        {/* profile */}
        <div className='flex sm:absolute sm:left-8 sm:-translate-y-1/2 gap-5 p-4 items-center'>
            <div className="h-30 sm:h-60 rounded-xl overflow-hidden  z-10">
                <img src="./images/profile.jpg" alt="" className='h-full object-cover'/>
            </div>
            <div className=' flex flex-col gap-1.5'>
                <h1 className='md:text-4xl text-3xl font-bold text-gray-300'>Aneesh Panwar</h1>
                <p className='text-gray-600 text-lg'>Developer & Programmer</p>
                <span className='bg-green-900 h-fit w-fit px-1.5 rounded-md text-green-400'>Available</span>
            </div>
        </div>

        <div className='flex gap-5'>
            <a href="#" title='Linked-In'><img src="./logos/linkedin.svg" alt="linkedIn" className='h-8 '/></a>
            <img src="./logos/github.svg" alt="github" className='h-8'/>
            <img src="./logos/leetcode.svg" alt="leetcode" className='h-8'/>
            <img src="./logos/twitter.svg" alt="twitter" className='h-8'/>
        </div>
    </div>
  )
}
