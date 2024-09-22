import React from 'react'
import {motion} from 'framer-motion'

import LocomotiveScroll from 'locomotive-scroll';


function Marquee() {
  const locomotive = new LocomotiveScroll();

  const textStr = (<span>CODE&nbsp; DEBUG&nbsp; BUILD&nbsp; DEPLOY&nbsp;</span>);

  const isMobile = window.innerWidth < 800;
  const scrollSpead = isMobile ? '0':'.2';
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed={scrollSpead} className='w-[100vw] pt-20 pb-10 lg:pb-40 bg-[#16423C] rounded-tr-xl rounded-tl-xl'>

      
        <div className='text-white border-t-[1px] border-b-[1px] border-slate-500 flex whitespace-nowrap overflow-hidden'>

            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:'linear', duration:10}}  className='text-[10vw] tracking-tighter leading-none font-semibold uppercase mt-14 mb-14'>

              {textStr}

            </motion.h1>

            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:'linear', duration:10}} className='text-[10vw] tracking-tighter leading-none font-semibold mt-14 mb-14'>
              
              {textStr}
              
            </motion.h1>

        </div>
    </div>
  )
}

export default Marquee;