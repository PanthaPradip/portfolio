import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import {motion} from 'framer-motion';

function LandingPage() {

    const resumeLink = 'https://drive.google.com/file/d/1aAodVTCE3WpmO2nhlHfROdQ8iqp3sBTp/view?usp=sharing';

    
    const textArr = ['Developer','UI-UX','Designer'];
    const bottomTextArr = ['B.Tech. Computer Science & Engineering','Specialization in Artificial Intelligence'];

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-[#F5F7F8] pt-1'>
        
        <div className='mt-40 px-20'>
            {(textArr.map((item, index)=>

            <div className='flex w-fit items-center'>
                
                {index==1 && (<motion.div initial={{width:0}} animate={{width:'9vw'}} transition={{ease:[0.76,0,0.24,1], duration:1}} className='w-[9vw] h-[5.5vw] bg-red-500 rounded-md ml-[0.7vw]'></motion.div>)}

                <p className="font-['Founders Grotesk'] text-[7.5vw] uppercase leading-[6.5vw] tracking-tighter font-semibold" key={index}>{item}</p>
            </div>
            ))}
        </div>

        <div className='border-t-[1px] border-zinc-400 mt-32 flex justify-between items-center py-10 px-20'>
            {(bottomTextArr.map((item, index)=>
                <p className='text-md font-light tracking-tight' key={index}>{item}</p>
            ))}


            <div>
                <div className='group px-5 py-2 border-[2px] border-slate-400 rounded-full font-light text-md flex gap-2
                    hover:bg-slate-700 hover:text-white transition-all delay-75 ease-in hover:cursor-pointer select-none'>
                        
                    <a 
                        href={resumeLink}
                        target="_blank" 
                        rel="noopener noreferrer" 
                    className='flex justify-center items-center'>Download Resume </a>

                    <div className='flex items-center justify-center rounded-full p-2 bg-slate-700 group-hover:bg-slate-200 transition-all delay-75 ease-in'>
                        <FaArrowDownLong className='text-white group-hover:text-slate-700 transition-all delay-75 ease-in'/>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default LandingPage;