import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
export interface Props {
    currentPage: string
}
function Navbar({ currentPage }: Props) {
    if (currentPage != 'home') {
        return (
            <div className='navbar  ml-14 w-full h-24 absolute right-0 top-10 z-10'>
                <nav className='flex items-center justify-between h-full w-full pl-20'>
                    <Roll duration={10000}>
                        <div className='mr-12 '>
                            <Image src={'/assets/shared/logo.svg'} width={80} height={80} />
                        </div>
                    </Roll>

                    <div className='border-b-[1px] relative left-8 z-20 border-white w-full opacity-25'>

                    </div>
                    <ul className='pl-10 pr-32 flex w-auto h-full justify-between items-center '
                        style={{ background: `rgba(255, 255, 255, 0.04)`, backdropFilter: `blur(81.5485px)` }}>
                        <Link href={'/'}>
                            <li className={currentPage === "home" ? 'navLinks active' : 'navLinks'}>
                                <span className='navNumber'>00</span>
                                <span className='navText'>home</span>
                            </li>
                        </Link>
                        <Link href={'/destination'}>
                            <li className={currentPage === "destination" ? 'navLinks active' : 'navLinks'}>
                                <span className='navNumber'>01</span>
                                <span className='navText'>destination</span>
                            </li>
                        </Link>
                        <Link href={'/crew'}>
                            <li className={currentPage === "crew" ? 'navLinks active' : 'navLinks'}>
                                <span className='navNumber'>02</span>
                                <span className='navText'>crew</span>
                            </li>
                        </Link>
                        <Link href={'/technology'}>
                            <li className={currentPage === "technology" ? 'navLinks active' : 'navLinks'}>
                                <span className='navNumber'>03</span>
                                <span className='navText'>technology</span>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
    return (
        <Fade duration={5000}>
            <div className='navbar  ml-14 w-full h-24 absolute right-0 top-10 z-10'>
                <nav className='flex items-center justify-between h-full w-full pl-20'>
                    <Roll duration={10000}>
                        <div className='mr-12 '>
                            <Image src={'/assets/shared/logo.svg'} width={80} height={80} />
                        </div>
                    </Roll>

                    <div className='border-b-[1px] relative left-8 z-20 border-white w-full opacity-25'>

                    </div>
                    <ul className='pl-10 pr-32 flex w-auto h-full justify-between items-center '
                        style={{ background: `rgba(255, 255, 255, 0.04)`, backdropFilter: `blur(81.5485px)` }}>
                        <Link href={'/'}>
                            <li className={currentPage === "home" ? 'navLinks active' : 'navLinks'}>
                                <span className='navNumber'>00</span>
                                <span className='navText'>home</span>
                            </li>
                        </Link>
                        <Link href={'/destination'}>
                            <li className={isToDestination(currentPage) ? 'navLinks active' : 'navLinks'}>
                                <span className='navNumber'>01</span>
                                <span className='navText'>destination</span>
                            </li>
                        </Link>
                        <Link href={'/crew'}>
                            <li className={isToCrew(currentPage) ? 'navLinks active' : 'navLinks'}>
                                <span className='navNumber'>02</span>
                                <span className='navText'>crew</span>
                            </li>
                        </Link>
                        <Link href={'/technology'}>
                            <li className={isToTechnology(currentPage) ? 'navLinks active' : 'navLinks'}>
                                <span className='navNumber'>03</span>
                                <span className='navText'>technology</span>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </Fade>

    )


}
export default Navbar

//checking if the current page is the same as the page in the link
function isToDestination(currentPage: string) {
    return currentPage === "destination";
}

function isToCrew(currentPage: string) {
    return currentPage === "crew";
}

function isToTechnology(currentPage: string) {
    return currentPage === "technology";
}

//checking if the current page is the same as the page in the link
