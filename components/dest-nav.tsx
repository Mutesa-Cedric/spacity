import React from 'react'

interface Props {
    currentDestination: string;
    handleClick: (destination: string) => void;
}

function DestNav({ currentDestination, handleClick }: Props) {
    return (
        <div className='flex justify-between'>
            <button className=' font-light text-base leading-[19px] tracking-[2.7px] uppercase pb-6 border-white'
                style={{ color: `${currentDestination === "Moon" ? "white" : "#D0D6F9"}`, borderBottomWidth: `${currentDestination === "Moon" ? "2px" : "0px"}` }}
                onClick={ handleClick.bind(null,"Moon") }
            >Moon</button>
            <button className=' font-light text-base leading-[19px] tracking-[2.7px] uppercase pb-6 border-white'
                style={{ color: `${currentDestination === "Mars" ? "white" : "#D0D6F9"}`, borderBottomWidth: `${currentDestination === "Mars" ? "2px" : "0px"}` }}
                onClick={handleClick.bind(null,"Mars") }
            >Mars</button>
            <button className=' font-light text-base leading-[19px] tracking-[2.7px] uppercase pb-6 border-white'
                style={{ color: `${currentDestination === "Europa" ? "white" : "#D0D6F9"}`, borderBottomWidth: `${currentDestination === "Europa" ? "2px" : "0px"}` }}
                onClick={handleClick.bind(null,"Europa") }

            >Europa</button>
            <button className=' font-light text-base leading-[19px] tracking-[2.7px] uppercase pb-6 border-white'
                style={{ color: `${currentDestination === "Titan" ? "white" : "#D0D6F9"}`, borderBottomWidth: `${currentDestination === "Titan" ? "2px" : "0px"}` }}
                onClick={handleClick.bind(null,"Titan") }
            >Titan</button>
        </div>
    )
}
export default DestNav