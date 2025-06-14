import { Book, Edit2, School, University } from 'lucide-react'
import React from 'react'

export default function Journey() {
  return (

<div>
    <div className="relative ml-6 mt-4">
    
        <div className="absolute top-8 -left-14 rotate-270 text-[12px] font-orbitron">
            2022-2025
        </div>
        <img
            src="./logos/identifiers/timeDisc.svg"
            alt=""
            className="absolute -top-4 -left-[8px] h-5 w-5 rounded-full"
        />
        <div className="w-0.5 h-45 bg-[#ff00f2]"></div>


    <div className="absolute left-3 -top-1.5 w-full h-fit rounded-r-lg overflow-hidden">
        <div className="absolute w-4 h-full bg-black shadow-full rounded-tr-full"></div>
        <span className="absolute top-0 right-0.5 bg-blue-500 text-[12px] px-1 rounded-bl-md">Education</span>


        <div className="py-4 pl-8 pr-4 bg-black shadow-inner hover:bg-gray-800">
            <h2 className="flex items-center gap-1.5 text-md capitalize pt-3 font-wallpoet text-gray-500">
                <img src="./logos/identifiers/education.svg" alt="" className="h-4" />
                Diploma in Computer-Science & Engineering
            </h2>
            <hr className="my-1" />
            <h3 className=" py-1 flex items-center gap-1.5 text-[12px] capitalize font-orbitron tracking-[2px]">
                <img src="./logos/identifiers/location.svg" alt="" className="h-4" />
                Location: Dehradun
            </h3>
            <h3 className="py-1 flex items-center gap-1.5 text-sm capitalize font-orbitron tracking-[2px]">
                <img src="./logos/identifiers/college.svg" alt="" className="h-4" />
                Govt. Inter College Dwara
            </h3>
        </div>
    </div>
    </div>
    
    <div className="relative ml-6 mt-4">
    
        <div className="absolute top-8 -left-14 rotate-270 text-[12px] font-orbitron">
            2022-2025
        </div>
        <img
            src="./logos/identifiers/timeDisc.svg"
            alt=""
            className="absolute -top-4 -left-[8px] h-5 w-5 rounded-full"
        />
        <div className="w-0.5 h-45 bg-[#ff00f2]"></div>


    <div className="absolute left-3 -top-1.5 w-full h-fit rounded-r-lg overflow-hidden">
        <div className="absolute w-4 h-full bg-black shadow-full rounded-tr-full"></div>
        <span className="absolute top-0 right-0.5 bg-blue-500 text-[12px] px-1 rounded-bl-md">Education</span>


        <div className="py-4 pl-8 pr-4 bg-black shadow-inner hover:bg-gray-800">
            <h2 className="flex items-center gap-1.5 text-md capitalize pt-3 font-wallpoet text-gray-500">
                <img src="./logos/identifiers/education.svg" alt="" className="h-4" />
                Diploma in Computer-Science & Engineering
            </h2>
            <hr className="my-1" />
            <h3 className=" py-1 flex items-center gap-1.5 text-[12px] capitalize font-orbitron tracking-[2px]">
                <img src="./logos/identifiers/location.svg" alt="" className="h-4" />
                Location: Dehradun
            </h3>
            <h3 className="py-1 flex items-center gap-1.5 text-sm capitalize font-orbitron tracking-[2px]">
                <img src="./logos/identifiers/college.svg" alt="" className="h-4" />
                Govt. Inter College Dwara
            </h3>
        </div>
    </div>
    </div>

</div>
  )
}
