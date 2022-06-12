import React from 'react'
import data from "../data.json"
import Image from "next/image"
import CrewNav from './crew-nav';
import Fade from 'react-reveal/Fade'
interface Props {
    currentCrew: string;
    updateCrew: (crew: string) => void;
}

function CrewComponent({ currentCrew, updateCrew }: Props) {
    const crew = data.crew.find(crew => crew.name === currentCrew)
    return (
        <div>
            <div className='flex relative justify-between items-center pb-20 w-auto h-auto'>
                <Fade left duration={2000}>
                    <div className='flex flex-col justify-between'>
                        <p className='font-light text-[32px] leading-9 uppercase text-white opacity-50 pb-4'>{crew?.role}</p>
                        <p className='text-white leading-[64px] font-light text-[56px] uppercase tracking-wider'>{crew?.name}</p>
                        <p className='text-[#D0D6F9] leading-8 text-[18px] font-light pt-6 pb-20 w-[36%] tracking-wide'>{crew?.bio}</p>
                        <CrewNav updateCrew={updateCrew} currentCrew={currentCrew} />
                    </div>
                </Fade>

                <Fade bottom duration={2000}>
                    <div className='absolute bottom-0 right-24 z-20' >
                        <Image src={crew!.images.png} width={410} height={520} />
                    </div>
                </Fade>

            </div>
        </div>
    )
}

export default CrewComponent