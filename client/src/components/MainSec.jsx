import AboutMe from './AboutMe'
import SecLayout from '../Layouts/SecLayout'
import TechSkills from './TechSkills'
import Projects from './Projects'
import Journey from './Journey'
import ExpandingNav from './ExpandingNav'
import ContactToMe from './ContactToMe'

export default function MainSec() {
  return (
    <div className='flex flex-col gap-25'>
        <div id="about">
          <SecLayout heading={"about Me"} Component={AboutMe} />
        </div>
     
        <div id="skills">
          <SecLayout heading={"technical skills"} Component={TechSkills} />
        </div>

        <div id="projects">
          <SecLayout heading={"My Work"} Component={Projects} />
        </div>

        <div id="journey">
          <SecLayout heading={"My Journey"} Component={Journey} />
        </div>

        <div id='contact'>
          <SecLayout heading={"contact me"} Component={ContactToMe}/>
        </div>

        
        <div className="block lg:hidden">
          <ExpandingNav />
        </div>

    </div>
  )
}
