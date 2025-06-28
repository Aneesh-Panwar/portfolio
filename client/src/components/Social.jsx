import React from 'react'
import CV from './CV'
import { Github } from 'lucide-react'

export default function Social() {
    let leetcode = 'https://leetcode.com/u/Aneesh_Panwar/'
    let X = 'https://x.com/aneesh_panwar?t=bfFksuJHIrjvhmLqhw597A&s=08'
    let linkedIn = 'https://www.linkedin.com/in/aneeshpanwar/'
    let github = 'https://github.com/Aneesh-Panwar'
    let Teligram = 'https://t.me/Aneesh_panwar'

  return (
    <div className='flex flex-wrap gap-8 items-center'>
        <div className='bg-zinc-950 flex gap-2 py-1.5 px-4 rounded-md shadow-3d'>
            <a href="https://github.com/Aneesh-Panwar" className=' hover:bg-zinc-800 h-10 w-10 rounded-md flex justify-center items-center transition'>
                <Github size={28} color='#6a7282'/>
            </a>
            <a href="https://www.linkedin.com/in/aneeshpanwar/" className=' hover:bg-zinc-800 h-10 w-10 rounded-md transition'>
                <img src="./logos/social/linkedin.svg" alt="" className='h-full p-2' />
            </a>
            <a href="https://x.com/aneesh_panwar?t=bfFksuJHIrjvhmLqhw597A&s=08" className=' hover:bg-zinc-800 h-10 w-10 rounded-md transition'>
                <img src="./logos/social/twitter.svg" alt="" className='h-full p-2' />
            </a>
            <a href="#" className=' hover:bg-zinc-800 h-10 w-10 rounded-md transition'>
                <img src="./logos/social/leetcode.svg" alt="" className='h-full p-2' />
            </a>
        </div>
        <CV/>
    </div>
  )
}
