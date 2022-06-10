import React from 'react'
import TechNav from './tech-nav';
import data from "../data.json"
import Image from 'next/image';

interface Props {
    currentTech: string;
    updateTech: (tech: string) => void;
}
function TechComponent({ currentTech, updateTech }: Props) {
    const tech = data.technology.find(tech => tech.name === currentTech)

    return (
        <div className='flex justify-between pt-2  items-center w-auto h-auto'>
            <div className='flex '>
                <TechNav currentTech={currentTech} updateTech={updateTech} />
                <div className='flex flex-col'>
                    <p className='text-[#D0D6F9] text-[16px] font-light leading-[19px] tracking-[2.7px]'>THE TERMINOLOGY…</p>
                    <p className='font-light text-[56px] leading-[64px] text-white py-4 uppercase'>{tech?.name}</p>
                    <p className='text-[#D0D6F9] leading-8 text-[18px] font-light tracking-[1px] w-3/5'>{tech?.description}</p>
                </div>
            </div>
            <div className='w-full'>
                <Image src={tech!.images.portrait} width={550} height={550} />
            </div>
        </div>
    )
}

export default TechComponent;