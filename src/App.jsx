import './App.css'
import Navbersection from './components/Navbersection'
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import Contract from './components/Contract';
import Footerall from './components/Footerall';
import SubSkills from './components/skillsSection/SubSkills';
import SkillsMain from './components/skillsSection/SkillsMain';



function App() {
  

  return (
    <div className=''>
     <Navbersection/>
     <Hero/>
      <SkillsMain/>
      <SubSkills/>
     <Projects/> 
     <Contract/>
     <Footerall/>
    </div>
  )
}

export default App