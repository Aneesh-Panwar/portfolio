import React from 'react'
import CV from './CV'
import { Github } from 'lucide-react'

export default function Social() {
  return (
    <div className='flex flex-wrap gap-8 items-center'>
        <div className='bg-zinc-950 flex gap-2 py-1.5 px-4 rounded-md'>
            <a href="#" className=' hover:bg-zinc-800 h-10 w-10 rounded-md transition'>
            <img src="./logos/social/linkedin.svg" alt="" className='h-full p-2' />
            </a>
            <a href="#" className=' hover:bg-zinc-800 h-10 w-10 rounded-md transition'>
                <img src="./logos/social/leetcode.svg" alt="" className='h-full p-2' />
            </a>
            <a href="#" className=' hover:bg-zinc-800 h-10 w-10 rounded-md transition'>
                <img src="./logos/social/twitter.svg" alt="" className='h-full p-2' />
            </a>
            <a href="#" className=' hover:bg-zinc-800 h-10 w-10 rounded-md flex justify-center items-center transition'>
                <Github size={28} color='#6a7282'/>
            </a>
        </div>
        <CV/>
    </div>
  )
}
