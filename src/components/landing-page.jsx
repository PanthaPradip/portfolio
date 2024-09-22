import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import {motion} from 'framer-motion';
import Box1animation from './json/box1animate.json';
import Lottie from 'lottie-react'

function LandingPage() {

    const resumeLink = 'https://drive.google.com/file/d/1aAodVTCE3WpmO2nhlHfROdQ8iqp3sBTp/view?usp=sharing';

    
    const textArr = ['Developer','frontend','Backend'];
    const bottomTextArr = ['B.Tech. Computer Science & Engineering','Specialization in Artificial Intelligence'];

    

  return (

   
    <div 
        data-scroll data-scroll-container data-scroll-speed="-.3" className='w-[100vw] h-[60vh] lg:h-[99vh] bg-[#F5F7F8] pt-1'>
        
        <div className='mt-32 lg:mt-40 px-10 lg:px-20'>
            {(textArr.map((item, index)=>

            <div key={index} className='flex w-fit items-center'>
                
                {index==1 && (<motion.div initial={{width:0}} animate={{width:'10vw'}} transition={{ease:[0.76,0,0.24,1], duration:2}} className='h-[4vh] lg:h-[11vh] rounded-md ml-[0.7vw] overflow-hidden bg-red-500 -z-[10] blur-[0.5px]'>
                      
                </motion.div>)}

               


                <p className={`text-[10vw] lg:text-[7.5vw] uppercase leading-[8vw] lg:leading-[6.5vw] tracking-tighter font-semibold text-zinc-700`}  key={index}>{item}</p>



                {index==2 && (<motion.div 
                
                initial={{width:0, x:300}} 
                animate={{width:'16vw', x:0}} 
                transition={{ease:[0.76,0,0.24,1], duration:2}} 
                
                className='h-[4vh] lg:h-[11vh] bg-red-500 rounded-md ml-[0.7vw] overflow-hidden  -z-[10] blur-[0.5px]'>

                    <Lottie className='w-[16vw]' animationData={Box1animation} loop={true}/>    
                    </motion.div>)}


            </div>
            ))}
        </div>

        <div className='border-t-[1px] border-zinc-400 mt-32 flex flex-col lg:flex-row justify-center lg:justify-between items-center py-10 px-20 gap-6 lg:gap-0'>
            {(bottomTextArr.map((item, index)=>
                <p className='text-md font-light tracking-tight text-center w-[70vw] lg:w-fit' key={index}>{item}</p>
            ))}


            <div className='pt-5 lg:pt-0'>
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