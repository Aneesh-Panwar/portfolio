import { MailIcon, MessageSquareHeart, Phone, SendHorizontal, UserRoundPenIcon } from 'lucide-react'
import React from 'react'

export default function ContactToMe() {
  return (
    <div className='flex flex-wrap gap-6 font-jura justify-center'>
        <div className='px-4 flex flex-col gap-4 w-full max-w-100'>
            <h1 className='text-cyan-700 text-xl font-wallpoet pl-4 mb-10'>Let's connect...!!</h1>
            <div className='flex gap-4 p-4 relative z-30 bg-slaty-100 text-shadow-3d text-xl shadow-3d rounded-md items-center '>
                <img src="./logos/social/linkedin.svg" alt=""  className='h-6 bg-white p-0.5 rounded-sm shadow-3d'/>
                <a href="https://www.linkedin.com/in/aneeshpanwar/" className='w-full'>Linked - In</a>
            </div>
            <div className='flex gap-4 p-4 relative z-30 bg-slaty-100 text-shadow-3d text-xl shadow-3d rounded-md items-center '>
                <img src="./logos/social/twitter.svg" alt=""  className='h-6 bg-white p-0.5 rounded-sm shadow-3d'/>
                <a href="https://x.com/aneesh_panwar?t=bfFksuJHIrjvhmLqhw597A&s=08/aneeshpanwar/" className='w-full'>X</a>
            </div>
            <div className='flex gap-4 p-4 relative z-30 bg-slaty-100 text-shadow-3d text-xl shadow-3d rounded-md items-center '>
                <MailIcon size={28} className='bg-white text-black p-0.5 rounded-sm shadow-3d'/>
                <a href="mailto:aaneeshpanwar@gmail.com" className='w-full'>E-mail</a>
            </div>
            <div className='flex gap-4 p-4 relative z-30 bg-slaty-100 text-shadow-3d text-xl shadow-3d rounded-md items-center '>
                <img src="./logos/social/whatsapp.svg" alt=""  className='h-6 bg-white p-0.5 rounded-sm shadow-3d'/>
                <a href="https://wa.me/917668338593" className='w-full'>Whatsapp</a>
            </div>

            
        </div>

        <div className=' p-6 bg-slaty px-4 flex flex-col gap-4 w-full max-w-100 rounded-md shadow-3d'>
            <div className='py-2 flex justify-center flex-col gap-4 text-xl w-full'>
                <div className='relative max-w-100 '>
                    <UserRoundPenIcon className='absolute ml-2 -translate-y-[50%] top-[50%]'/>
                    <input type="text" className='shadow-3dr w-full rounded-md pl-10 py-2 h-15 outline-none' />
                </div>
                <div className='relative max-w-100 '>
                    <MailIcon className='absolute ml-2 -translate-y-[50%] top-[50%]'/>
                    <input type="email" className='shadow-3dr rounded-md pl-10 py-2 w-full h-15 outline-none' />
                </div>
                <div className='relative max-w-100'>
                    <MessageSquareHeart className='absolute ml-2 top-4'/>
                    <textarea type="text" className='shadow-3dr rounded-md pl-10 py-2 w-full outline-none max-h-50' />
                </div>

                <div className='shadow-3d rounded-md text-center py-2 active:shadow mt-3'>
                    message <SendHorizontal className='inline'/>
                </div>
            </div>
        </div>
    </div>
  )
}
