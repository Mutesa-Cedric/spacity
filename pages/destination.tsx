import Head from 'next/head'
import React, { useState } from 'react'
import DestinationComponent from '../components/dest-component'
import Navbar from '../components/navbar'

function Destination() {

  const [currentDestination, setCurrentDestination] = useState('Moon')

  //updating currentDestination when user clicks on a destination
  const handleClick = (destination: string) => {
    setCurrentDestination(destination)
    // console.log("changing on destination click");
  }

  return (
    <div>
      <Head>
        <title>Spacity - Destination</title>
        <link rel="icon" href="/assets/shared/logo.svg" />
      </Head>
      <Navbar currentPage='destination' />
      <main className="flex relative w-screen h-screen flex-col  bg-center bg-cover bg-no-repeat"
       style={{ backgroundImage: 'url(/assets/destination/background-destination-desktop.jpg)' }}>
        <div className=' absolute top-[23%] pl-52 pr-44 w-full h-[67%] flex flex-col justify-between px-50'>
          <div className='flex items-center'>
            <span className='text-white opacity-25 font-bold text-[28px] leading-[34px] tracking-[4.725px] mr-4'>01</span>
            <span className='font-light text-[28px] leading-[34px] tracking-[4.725px] text-white'>Pick your destination</span>
          </div>
          <DestinationComponent handleClick={handleClick} currentDestination={currentDestination}/>
        </div>
      </main>
    </div>
  )
}

export default Destination