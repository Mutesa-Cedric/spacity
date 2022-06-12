import Head from 'next/head'
import React, { useState } from 'react'
import CrewComponent from '../components/crew-component'
import Navbar from '../components/navbar'

function Crew() {

  const [currentCrew, setCurrentCrew] = useState('Douglas Hurley')

  //updating currentcrew when user clicks on a crew

  const updateCrew = (crew: string) => {
    setCurrentCrew(crew)
    // console.log("changing on destination click");
  }

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Spacity - Crew</title>
        <link rel="icon" href="/assets/shared/logo.svg" />
      </Head>
      <Navbar currentPage='crew' />
      <main className="flex relative w-screen h-screen flex-col  bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/crew/background-crew-desktop.jpg)' }}>
        <div className="absolute top-[23%] pl-52 pt-8 pr-16 w-full h-[77%]  flex flex-col justify-between px-50">
          <div className='flex items-center'>
            <span className='text-white opacity-25 font-bold text-[28px] leading-[34px] tracking-[4.725px] mr-4'>02</span>
            <span className='font-light text-[28px] leading-[34px] tracking-[4.725px] text-white uppercase'>Meet your crew</span>
          </div>
          <CrewComponent currentCrew={currentCrew} updateCrew={updateCrew} />
        </div>
      </main>
    </div>
  )
}

export default Crew