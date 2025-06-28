import React from 'react'
import Skill from "./Skill";
import AdvancedTabs from './AdvancedTabs';
// import CircularProgress from './CircularProgress';
import MyProgress from './CircularProgress';
import ConicCircularProgress from './CircularProgress';

export default function TechSkills() {
  return (
    <div className='max-h-100'>
      <div className='text-cyan-700 text-xl mb-10 font-wallpoet pl-4'>From syntax to systems</div>
      <AdvancedTabs/>           
    </div>
  )
}
