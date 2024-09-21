import React from 'react'
import {motion} from 'framer-motion'
function Marquee() {

  const textStr = (<span>CODE&nbsp; DEBUG&nbsp; BUILD&nbsp; DEPLOY&nbsp;</span>);
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full pt-20 pb-40 bg-[#16423C] rounded-tr-xl rounded-tl-xl'>

      
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