import Head from 'next/head'
import React, { useState } from 'react'
import Navbar from '../components/navbar'
import TechComponent from '../components/tech-component'

function Technology() {
  const [currentTech, setCurrentTech] = useState('Launch vehicle')

  //updating currentcrew when user clicks on a crew

  const updateTech = (tech: string) => {
    setCurrentTech(tech)
    // console.log("changing on destination click");
  }
  return (
    <div>
      <Head>
        <title>Spacity - Technology</title>
        <link rel="icon" href="/assets/shared/logo.svg" />
      </Head>
      <Navbar currentPage='technology' />

      <main className="flex relative w-screen h-screen flex-col  bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/technology/background-technology-desktop.jpg)' }}>
        <div className='absolute top-[23%] pl-52 pb-16 w-full h-[77%]  flex flex-col justify-between px-50'>
        <div className='flex items-center'>
            <span className='text-white opacity-25 font-bold text-[28px] leading-[34px] tracking-[4.725px] mr-4'>03</span>
            <span className='font-light text-[28px] leading-[34px] tracking-[4.725px] text-white uppercase'>SPACE LAUNCH 101</span>
          </div>
          <TechComponent currentTech={currentTech} updateTech={updateTech}/>
        </div>
      </main>
    </div>
  )
}

export default Technology