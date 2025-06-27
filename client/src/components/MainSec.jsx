import AboutMe from './AboutMe'
import SecLayout from '../Layouts/SecLayout'
import TechSkills from './TechSkills'
import Journey from './Journey'
import ExpandingNav from './ExpandingNav'
import ContactToMe from './ContactToMe'
import ProjectCard from "./ProjectCard";
import GetInTouch from './GetInTouch'
import CV from './CV'
import Social from './Social'

export default function MainSec() {
  return (
    <div className='flex flex-col gap-30 '>

        <div id="about" className='break-inside-avoid'>
          <SecLayout heading={"about Me"} Component={AboutMe} />
        </div>


        <div id="skills" className='break-inside-avoid'>
          <SecLayout heading={"technical skills"} Component={TechSkills} />
        </div>

        {/* <div id="about" className='break-inside-avoid'>
          <SecLayout heading={"social"} Component={GetInTouch} />
        </div> */}

        <div id="projects" className='break-inside-avoid'>
          <SecLayout heading={"My Work"} Component={ProjectCard} />
        </div>

        <div id="journey" className='break-inside-avoid'>
          <SecLayout heading={"My Journey"} Component={Journey} />
        </div>

        <div id='contact' className='break-inside-avoid'>
          <SecLayout heading={"contact me"} Component={ContactToMe}/>
        </div>

        
        <div className="block lg:hidden">
          <ExpandingNav />
        </div>





    </div>
  )
}
