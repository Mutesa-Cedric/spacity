import React from 'react'
import Fade from 'react-reveal/Fade'
interface Props {
    currentTech: string;
    updateTech: (tech: string) => void;
}
function TechNav({ currentTech, updateTech }: Props) {
    return (
        <div className='flex flex-col justify-between mr-24'>
            <Fade duration={3000}>
            <div className='w-[80px]  text-[32px] leading-9 justify-center flex items-center h-[80px] rounded-[50%] cursor-pointer'
                style={{
                    backgroundColor: `${currentTech === "Launch vehicle" ? "white" : "#11131D"}`,
                    border:`${currentTech === "Launch vehicle" ?"none" : "1px solid rgba(255,255,255,0.25)"}`,
                    color: `${currentTech === "Launch vehicle"?"#0B0D17":"white"}`
                }}
                onClick={updateTech.bind(null,"Launch vehicle")}
            >1</div>
            <div className='w-[80px]  text-[32px] leading-9 justify-center flex items-center h-[80px] rounded-[50%] cursor-pointer'
            style={{
                backgroundColor: `${currentTech === "Spaceport" ? "white" : "#11131D"}`,
                border:`${currentTech === "Spaceport" ?"none" : "1px solid rgba(255,255,255,0.25)"}`,
                color: `${currentTech === "Spaceport"?"#0B0D17":"white"}`
            }}
            
            onClick={updateTech.bind(null,"Spaceport")}
            >2</div>
            <div className='w-[80px]  text-[32px] leading-9 justify-center flex items-center h-[80px] rounded-[50%] cursor-pointer'
             style={{
                backgroundColor: `${currentTech === "Space capsule" ? "white" : "#11131D"}`,
                border:`${currentTech === "Space capsule" ?"none" : "1px solid rgba(255,255,255,0.25)"}`,
                color: `${currentTech === "Space capsule"?"#0B0D17":"white"}`
            }}
            onClick={updateTech.bind(null, "Space capsule")}
            >3</div>
            </Fade>
         
        </div>
    )
}

export default TechNav