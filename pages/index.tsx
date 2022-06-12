import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  let navigate=useRouter()
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Spacity - Home</title>
        <link rel="icon" href="/assets/shared/logo.svg" />
      </Head>
      <main className="flex relative w-screen h-screen flex-col  bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/home/background-home-desktop.jpg)' }}>
        <Navbar currentPage='home' />
        <div className=' absolute top-[40%] px-52 w-full h-3/5
        flex justify-between items-center pb-10'>
          <div className='flex flex-col justify-around h-auto '>
            <Fade left duration={2000}>
              <p className='text-[#D0D6F9] font-["lato",sans-serif]'>SO, YOU WANT TO TRAVEL TO</p>
              <p id='space-text' className='text-white leading-10 text-[172px]'>SPACE</p>
              <p id='home-desc'>Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!</p>
            </Fade>
          </div>
          <Fade bottom duration={3000} >
            <div onClick={()=>{navigate.push('/destination')}} className=' cursor-pointer h-[48%] mb-4 self-end w-[32%] flex items-center justify-center rounded-[50%] bg-white'>
              <span id='explore-text'> EXPLORE</span>
            </div>
          </Fade>
        </div>
      </main>
    </div>
  )
}

export default Home
