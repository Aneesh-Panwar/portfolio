import React from 'react'

export default function SecLayout({heading,Component}) {
  return (
    <div className='relative p-3 '>
        <h3 className='border-b-1 border-cyan-500 font-bold capitalize absolute top-0 left-10 bg-gray-800 rounded-2xl px-4 py-0.5'>{heading}</h3>
        <div className='bg-gray-900 py-8 px-5 border-2 rounded-2xl border-gray-500 '>
            <Component/>
        </div>
    </div>
  )
}
