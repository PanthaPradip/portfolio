import React, { useEffect, useState } from 'react'
import bgplayImg from '../assets/bgplayImage.png';

function BgPlay() {

    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);

            setRotate(angle-180);
        })
    },[])


  return (
    <div id='play' className='w-full h-screen overflow-hidden hidden lg:block'>

        <div data-scroll data-scroll-container data-scroll-speed="-.8" className='relative w-full h-[80vh] lg:h-full bg-red-400 cursor-cell'
            style={{
                backgroundImage: `url(${bgplayImg})`,
                backgroundPosition: 'center',
                backgroundSize:'30%',
                backgroundRepeat: 'no-repeat',
                
            }}>

        <div className='absolute top-1/3 left-1/2 -translate-x-[40%] translate-y-[11%] flex gap-[3.9rem] -rotate-3'>


            <div className='w-[6.6vw] h-[6.6vw] bg-blue-300 rounded-full flex items-center justify-center '>
                <div className='relative w-2/3 h-2/3 bg-zinc-800 rounded-full'>
                    

                <div style={{
                    transform:`translate(-50%, -50%) rotate(${rotate}deg)`
                }} className="Line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-4">
                    <div className='Circle ml-4 w-4 h-4 bg-slate-200 rounded-full'></div>
                </div>
                    

                </div>
            </div>



            <div className='w-[6.6vw] h-[6.6vw] bg-blue-300 rounded-full flex items-center justify-center'>

              
                <div className='relative w-2/3 h-2/3 bg-zinc-800 rounded-full flex items-center justify-center'>
                

                <div style={{
                    transform:`translate(-50%, -50%) rotate(${rotate}deg)`
                }} className="Line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-4">
                    <div className='Circle ml-4 w-4 h-4 bg-slate-200 rounded-full'></div>
                </div>


                </div>
             
            </div>


            

        </div>
    </div>

    </div>
  )
}

export default BgPlay;