import React from 'react'

interface Props {
    currentCrew: string;
    updateCrew: (crew: string) => void;
}
function CrewNav({ currentCrew, updateCrew }: Props) {
    return (
        <div className='flex'>
            <div className='cursor-pointer mx-3 w-[15px] h-[15px]  mix-blend-normal rounded-[50%]'
                style={{ backgroundColor: `${currentCrew === "Douglas Hurley" ? "white" : "rgb(255,255,255,.17)"}` }}
                onClick={updateCrew.bind(null,"Douglas Hurley")}
            ></div>
            <div className='cursor-pointer mx-3 w-[15px] h-[15px]  mix-blend-normal rounded-[50%]'
                style={{ backgroundColor: `${currentCrew === "Mark Shuttleworth" ? "white" : "rgb(255,255,255,.17)"}` }}
                onClick={updateCrew.bind(null,"Mark Shuttleworth")}
            ></div>
            <div className='cursor-pointer mx-3 w-[15px] h-[15px]  mix-blend-normal rounded-[50%]'
                style={{ backgroundColor: `${currentCrew === "Victor Glover" ? "white" : "rgb(255,255,255,.17)"}` }}
                onClick={updateCrew.bind(null,"Victor Glover")}
            ></div>
            <div className='cursor-pointer mx-3 w-[15px] h-[15px]  mix-blend-normal rounded-[50%]'
                style={{ backgroundColor: `${currentCrew === "Anousheh Ansari" ? "white" : "rgb(255,255,255,.17)"}` }}
                onClick={updateCrew.bind(null,"Anousheh Ansari")}
            ></div>
        </div>
    )
}

export default CrewNav