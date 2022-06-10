import React from 'react'
import data from "../data.json"

import Image from "next/image"
import { Destination } from '../typings'
import DestNav from './dest-nav'
interface Props {
    currentDestination: string;
    handleClick: (destination: string) => void;
}

function DestinationComponent({ currentDestination, handleClick }: Props) {
    const destination = data.destinations.find(destination => destination.name === currentDestination)
    // const changeDestination = (destination: string) => {
    //     // console.log(destination);
    // }
    return (
        <div className='flex justify-between items-center w-full h-auto pl-24 pr-16 mt-10'>
            <div className=''>
                <Image src={destination!.images.png} width={400} height={400} />
            </div>
            <div className='flex flex-col justify-between w-2/5'>
                <DestNav handleClick={handleClick} currentDestination={currentDestination} />
                <div className='text-white text-[100px] leading-[115px] font-normal my-4'>
                    {destination?.name}
                </div>
                <p className='text-[#D0D6F9] font-light text-lg leading-8'>
                    {destination?.description}
                </p>
                <div className='flex justify-between items-center mt-8'>
                    <div className='flex flex-col justify-between '>
                        <span className='text-[#D0D6F9] font-normal text-[14px] leading-[17px] tracking-[2.362px] uppercase'>AVG. DISTANCE</span>
                        <span className='font-light mt-4 text-white uppercase leading-8 text-[28px] tracking-wider'>{destination?.distance}</span>
                    </div>
                    <div className='flex flex-col justify-between '>
                        <span className='text-[#D0D6F9] font-normal text-[14px] leading-[17px] tracking-[2.362px] uppercase'>Est. travel time</span>
                        <span className='font-light mt-4 text-white uppercase leading-8 text-[28px] tracking-wider'>{destination?.travel}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DestinationComponent