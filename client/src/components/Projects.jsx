import React from 'react'

export default function Projects() {
  return (
    <div className='py-5 flex flex-col gap-4 overflow-y-auto items-center font-orbitron'>
      <div className='flex gap-4 bg-[#0b0b0b] p-3 rounded-lg shadow-lg shadow-cyan-200/20'>
      <img src="./logos/f3.svg" alt="img" className='h-10'/>
        <div>
          <h2 className='capitalize text-xl '>project one</h2>
        </div>
      </div>

      <div className='flex gap-4 bg-[#0b0b0b] p-3 rounded-lg shadow-lg shadow-cyan-200/20'> 
      <img src="./logos/f3.svg" alt="img" className='h-10'/>
        <div>
          <h2 className='capitalize text-xl '>project one</h2>
        </div>
      </div>

      <button className='bg-cyan-950 w-fit px-4 py-2 rounded-xl hover:opacity-50 active:opacity-100'>Expand</button>
    </div>
  )
}
