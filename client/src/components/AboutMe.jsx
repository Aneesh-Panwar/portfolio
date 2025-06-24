import { ArrowBigRight } from "lucide-react";

export default function AboutMe() {
  return (
    <div className='px-4 '>
       <h1 className="typewriter font-wallpoet text-3xl text-cyan-700">Hey there...!!</h1>

        <div  className="font-jura tracking-[2px] text-gray-30 flex flex-col gap-4">
          <p>
        I'm <span className="font-bold text-gray-100">Aneesh Panwar</span> a Computer Science Engineering diploma graduate,
         specialized in software and web 
        development, with hands-on experience in C, C++, Python, Java, and full-stack 
        technologies. </p>

        <p className="font-bold text-white">Got a project or idea? Feel free to reach out — 
          I’m always open to collaborations and new challenges!</p>

          <a href="#contact">
            <button className="bg-indigo-900 d w-fit flex gap-1 items-center p-2 rounded-md cursor-pointer">Lets Connect <ArrowBigRight size={20} color="black"/></button>
          </a>
        </div>

    </div>
  )
}
