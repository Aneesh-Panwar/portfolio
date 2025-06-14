import AboutMe from './AboutMe'
import SecLayout from '../Layouts/SecLayout'
import TechSkills from './TechSkills'
import Projects from './Projects'
import Journey from './Journey'
import ExpandingNav from './ExpandingNav'

export default function MainSec() {
  return (
    <div className='flex flex-col gap-25'>
        <SecLayout heading={"about Me"} Component={AboutMe} />
     
        <SecLayout heading={"technical skills"} Component={TechSkills} />

        <SecLayout heading={"My Work"} Component={Projects} />

        <SecLayout heading={"My Journey"} Component={Journey} />

        
        <div className="block lg:hidden">
          <ExpandingNav />
        </div>

    </div>
  )
}
