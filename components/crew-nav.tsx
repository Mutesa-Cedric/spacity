import React from 'react'

interface Props{
    currentCrew:string;
    updateCrew:(crew:string)=>void;
}
function CrewNav({currentCrew,updateCrew}:Props) {
  return (
    <div className='flex'>
        <div className='mx-3 w-[15px] h-[15px] bg-white mix-blend-normal rounded-[50%]'></div>
        <div className='mx-3 w-[15px] h-[15px] bg-white mix-blend-normal rounded-[50%]'></div>
        <div className='mx-3 w-[15px] h-[15px] bg-white mix-blend-normal rounded-[50%]'></div>
        <div className='mx-3 w-[15px] h-[15px] bg-white mix-blend-normal rounded-[50%]'></div>
    </div>
  )
}

export default CrewNav