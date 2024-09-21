import React, { useState } from 'react'
import project1Image from '../assets/project1Image.jpg'
import project2Image from '../assets/project2Image.jpg'
import project3Image from '../assets/project3Image.jpg'
import project4Image from '../assets/project4Image.png'
import { motion } from 'framer-motion';

function Projects() {

  const p1 = "Tourism-Website";
  const p2 = "Restaurant-Web-Application";
  const p3 = "UI/UX-Design";
  const p4 = "Object-Detection";

  const [isHover, setHover] = useState({hover1:false, hover2:false, hover3:false, hover4:false});



  return (
    <div className='w-full pb-20 lg:py-20'>
        <div className='w-full pl-10  lg:px-20 border-b-2 border-zinc-400 pb-10'>
          <h1 className='text-5xl lg:text-8xl tracking-tight'>Projects</h1>
        </div>

        <div className="cards w-full flex lg:flex-row flex-col gap-4 lg:gap-10 px-5 lg:px-20 pt-10 pb-5 lg:py-10 justify-center items-center">

{/* ------------------------------------------------------------------------ */}
{/* Card 1 */}
      <div onMouseEnter={()=>setHover({...isHover, hover1:true})} onMouseLeave={()=>setHover({...isHover, hover1:false})} className="card1container card1 w-[80vw] lg:w-1/2 lg:h-[60vh] bg-slate-300 rounded-xl p-4 lg:p-10 relative flex justify-center items-center">
            <h1 className='absolute text-2xl font-sans tracking-tighter bottom-4 font-bold text-zinc-600 flex overflow-hidden'>
                {p1.split("").map((item, i)=>

                    <motion.span initial={{y:"100%"}} animate={isHover.hover1 ? ({y:0}) : ({y:"100%"})} transition={{delay:i*.01}} key={i}>{item}</motion.span>
                    
                )}
            </h1>
        <div className="card1 lg:w-[95%] h-[80%] rounded-md overflow-hidden  hover:rounded-3xl hover:w-[100%]  lg:mb-8 transition-all ease-in-out duration-1000">
            <img src={project1Image}/>
        </div>
      </div>


{/* ------------------------------------------------------------------------ */}
{/* Card 2 */}

          <div onMouseEnter={()=>setHover({...isHover, hover2:true})} onMouseLeave={()=>setHover({...isHover, hover2:false})} className="card1container card1 w-[80vw] lg:w-1/2 lg:h-[60vh] bg-zinc-600 rounded-xl px-4 py-7 lg:p-10 relative flex justify-center items-center">
                <h1 className='absolute text-2xl font-sans tracking-tighter bottom-4 font-bold text-zinc-400 flex overflow-hidden'>
                  {p2.split("").map((item, i)=>

                    <motion.span initial={{y:"100%"}} animate={isHover.hover2 ? ({y:0}) : ({y:"100%"})} transition={{delay:i*.01}} key={i}>{item}</motion.span>
                    
                  )}
                </h1>
              <div className="card1 w-[95%] h-fit rounded-md overflow-hidden  hover:rounded-3xl hover:w-[100%] lg:mb-8 transition-all ease-in-out duration-1000">
                <img src={project2Image}/>
              </div>
            </div>


{/* ------------------------------------------------------------------------ */}
            
        </div>


        {/* Second Card Section */}

        <div className="cards w-full flex flex-col lg:flex-row gap-4 lg:gap-10 px-20 lg:py-10 justify-center items-center">

            <div onMouseEnter={()=>setHover({...isHover, hover3:true})} onMouseLeave={()=>setHover({...isHover, hover3:false})} className="card3container card1 w-[80vw] lg:w-1/2 lg:h-[60vh] bg-[#6482AD] rounded-xl p-4 lg:p-10 relative flex justify-center items-center">

            <h1 className='absolute text-2xl font-sans tracking-tighter bottom-8 font-bold text-zinc-50 flex overflow-hidden'>
                {p3.split("").map((item, i)=>

                  <motion.span initial={{y:"100%"}} animate={isHover.hover3 ? ({y:0}) : ({y:"100%"})} transition={{delay:i*.01}}>{item}</motion.span>
                  
                )}
              </h1>

              <div className="card3 w-[95%] h-[80%] rounded-md overflow-hidden  hover:rounded-3xl hover:w-[100%] lg:mb-8 transition-all ease-in-out duration-1000">
                <img src={project3Image}/>
              </div>
            </div>




            <div onMouseEnter={()=>setHover({...isHover, hover4:true})} onMouseLeave={()=>setHover({...isHover, hover4:false})} className="card4container w-[80vw] lg:w-1/2 lg:h-[60vh] bg-slate-500 rounded-xl p-4 lg:p-10 relative flex justify-center items-center">

            <h1 className='absolute text-2xl font-sans tracking-tighter bottom-8 font-bold text-zinc-300 flex overflow-hidden'>
                {p4.split("").map((item, i)=>

                  <motion.span initial={{y:"100%"}} animate={isHover.hover4 ? ({y:0}) : ({y:"100%"})} transition={{delay:i*.01}}>{item}</motion.span>
                  
                )}
              </h1>

              <div className="card4 w-[95%] h-[80%] rounded-md overflow-hidden  hover:rounded-3xl hover:w-[100%]  lg:mb-8 transition-all ease-in-out duration-1000">
                <img src={project4Image}/>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Projects;