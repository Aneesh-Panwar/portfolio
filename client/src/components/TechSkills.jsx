import React from 'react'

export default function TechSkills() {
  return (
    <div>
        <div >
            {/* side bar */}
            <div className='flex flex-wrap gap-4 justify-center'> 
                <span className='capitalize bg-black  rounded-2xl px-3 py-1 '>Programming languages</span>
                <span className='capitalize bg-black  px-3 py-1 rounded-2xl '>frontend</span>
                <span className='capitalize bg-black  px-3 py-1 rounded-2xl '>backend</span>
                <span className='capitalize bg-black  px-3 py-1 rounded-2xl '>tools & othres</span>
            </div>
            <hr className='my-4'/>
        </div>

        <div className=' flex justify-between flex-wrap gap-4'>
            <div className='bg-[#313131] px-5 py-0.5 w-fit rounded-2xl'>C</div>            
            <div className='bg-black/80 px-5 py-0.5 w-fit rounded-2xl'>C++</div>
            <div className='bg-black/80 px-5 py-0.5 w-fit rounded-2xl'>Java</div>
            <div className='bg-black/80 px-5 py-0.5 w-fit rounded-2xl'>python</div>
            <div className='bg-black/80 px-5 py-0.5 w-fit rounded-2xl'>Java Script</div>
            <div className='bg-black/80 px-5 py-0.5 w-fit rounded-2xl'>HTML</div>
            <div className='bg-black/80 px-5 py-0.5 w-fit rounded-2xl'>CSS</div>
            <div className='bg-black/80 px-5 py-0.5 w-fit rounded-2xl'>React.js</div>
        </div>
    </div>
  )
}
