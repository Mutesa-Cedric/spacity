import React from 'react'
import data from "../data.json"
import Image from "next/image"
import CrewNav from './crew-nav';

interface Props {
    currentCrew: string;
    updateCrew: (crew: string) => void;
}

function CrewComponent({ currentCrew, updateCrew }: Props) {
    const crew = data.crew.find(crew => crew.name === currentCrew)
    return (
        <div>
            <div className='flex relative justify-between items-center w-full h-auto border'>
                <div className='flex flex-col justify-between'>
                    <p>{crew?.role}</p>
                    <p>{crew?.name}</p>
                    <p>{crew?.bio}</p>
                    <CrewNav updateCrew={updateCrew} currentCrew={currentCrew} />
                </div>
                <div className='absolute bottom-0 right-4 z-' >
                    <Image src={crew!.images.png} width={370} height={540} />
                </div>
            </div>
        </div>
    )
}

export default CrewComponent