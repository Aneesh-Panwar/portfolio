import React from 'react'

export default function Projects() {
  return (
    <div className='flex flex-col gap-4  font-orbitron max-h-100'>
      <div className='text-cyan-700 text-xl font-wallpoet'>Ideas. Built. Shipped</div>

      <div className='flex flex-col gap-4 overflow-auto'>

        <div className='flex gap-4 bg-[#0b0b0b] p-3 rounded-md'>
        <img src="./logos/f3.svg" alt="img" className='h-10'/>
          <div>
            <h2 className='capitalize text-xl '>project one</h2>
          </div>
        </div>

        <div className='flex gap-4 bg-[#0b0b0b] p-3 rounded-md'> 
        <img src="./logos/f3.svg" alt="img" className='h-10'/>
          <div>
            <h2 className='capitalize text-xl '>project one</h2>
          </div>
        </div>

        <div className='flex gap-4 bg-[#0b0b0b] p-3 rounded-md'> 
        <img src="./logos/f3.svg" alt="img" className='h-10'/>
          <div>
            <h2 className='capitalize text-xl '>project one</h2>
          </div>
        </div>

        <div className='flex gap-4 bg-[#0b0b0b] p-3 rounded-md'> 
        <img src="./logos/f3.svg" alt="img" className='h-10'/>
          <div>
            <h2 className='capitalize text-xl '>project one</h2>
          </div>
        </div>

        <div className='flex gap-4 bg-[#0b0b0b] p-3 rounded-md'> 
        <img src="./logos/f3.svg" alt="img" className='h-10'/>
          <div>
            <h2 className='capitalize text-xl '>project one</h2>
          </div>
        </div>

        <div className='flex gap-4 bg-[#0b0b0b] p-3 rounded-md'> 
        <img src="./logos/f3.svg" alt="img" className='h-10'/>
          <div>
            <h2 className='capitalize text-xl '>project one</h2>
          </div>
        </div>

      </div>

      <button className='bg-cyan-950 w-fit px-4 py-2 rounded-md hover:opacity-50 active:opacity-100'>Expand</button>
    </div>
  )
}
