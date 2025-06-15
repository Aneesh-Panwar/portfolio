import {BookOpen,LocateFixedIcon,} from 'lucide-react'
import { journey } from '../data.js/journey'

export default function Journey() {
  return (

<div className=''>
    <div className='text-cyan-700 text-xl font-wallpoet pl-4 mb-10'>From curiosity to code</div>

    {
        journey.map((journey,i)=>(
            <div className="relative ml-6 mt-4 mr-4" key={i}>
    
                <div className="absolute -top-6 left-6  text-[12px] font-jura">
                    {journey.start}-{journey.end}
                </div>
                <img
                    src={journey.timelineIcon}
                    alt=">"
                    className="absolute -top-4 -left-[9px] h-5 p-0.5 w-5 shadow-full bg-black rounded-full"
                />
                <div className="w-0.5 h-45 bg-[#ff00f2]"></div>


                <div className="absolute left-3 -top-1.5 w-full h-fit rounded-r-lg overflow-hidden">
                    <div className="absolute w-4 h-full bg-black shadow-full rounded-tr-full"></div>
                    <span className="absolute top-0 right-0.5 bg-[#002ca5] text-[12px] px-1 rounded-bl-md">{journey.catagory}</span>


                    <div className="py-4 pl-8 pr-4 bg-black shadow-inner cursor-pointer hover:bg-gray-950">
                        <h2 className="flex items-center gap-1.5 text-md capitalize pt-3 font-wallpoet text-gray-500">
                            <BookOpen size={18}/>
                            {journey.name}
                        </h2>
                        <hr className="my-1" />
                        <h3 className=" py-1 flex items-center gap-1.5 text-[12px] capitalize font-orbitron tracking-[2px]">
                            <img src="./logos/identifiers/location.svg" alt="" className="h-4" />
                            {journey.location}
                        </h3>
                        <h3 className="py-1 flex items-center gap-1.5 text-[12px] capitalize font-orbitron tracking-[2px]">
                            <img src="./logos/identifiers/college.svg" alt="" className="h-4" />
                            {journey.organization}
                        </h3>
                    </div>
                </div>
            </div>
        ))
    }
   

</div>
  )
}
