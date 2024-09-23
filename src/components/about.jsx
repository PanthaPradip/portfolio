import React from 'react'
import profilePic from '../assets/profilePic.jpg';
import AboutData from './json/about-data.json';
import reactImg from '../assets/reactImage.png';
import jsImg from '../assets/jsImage.png';
import nodeImg from '../assets/nodeImage.png';
import expressImg from '../assets/expressImage.png';
import mongodbImg from '../assets/mongodbImage.png';
import tailwindImg from '../assets/tailwindImage.png';
import cppImg from '../assets/cppImage.png';
import pythonImg from '../assets/pythonImage.png';
import htmlImg from '../assets/htmlImage.png';
import cssImg from '../assets/cssImage.png';
import prImg from '../assets/prImage.png';
import aeImg from '../assets/aeImage.png';
import psImg from '../assets/psImage.png';



function About() {
  


  return (
    

    <div data-scroll-container>
    <div id='about' data-scroll data-scroll-section data-scroll-speed={window.innerWidth < 800 ? "0" : "-.2"}  
    
    className='w-full px-6 lg:px-20 py-28 bg-[#C0C78C] lg:rounded-tl-xl lg:rounded-tr-xl flex flex-col lg:flex-row'>

        <div className='flex flex-col gap-8 w-full lg:w-[60vw] lg:px-10 font-sans font-light text-slate-900'>

            <div>
            <div className='bg-[#507687] rounded-md font-cursive  text-slate-300 text-4xl py-1 mb-4 pl-4 tracking-[0.08rem]'>About me</div>
                <div className='w-40 h-40 overflow-hidden  mb-2 float-start'>
                    <img className='w-[8rem] rounded-2xl' src={profilePic} alt='Profile Picture'/>
                </div>
                
                <p className='text-justify leading-5 font-sans text-sm'>
                    {(
                        AboutData.about.split('\n').map((line, index)=>
                        <span key={index}>{line}<br/></span>)
                    )}
                </p>
            </div>

            <div>

                <div className='flex flex-col bg-[#507687] px-4 py-5 rounded-md'>
                    <h1 className='font-cursive tracking-[0.08rem]  text-4xl text-slate-300 mb-2'>Education</h1>

                    <div className='flex justify-between py-2 px-8 text-white'>
                        <div>

                            <p className='font-medium'>{AboutData.gradCollege}</p>
                            <p className='text-zinc-300 text-sm'>{AboutData.gradStream}</p>
                            <p className='text-zinc-300 text-sm'>{AboutData.gradSubStream}</p>
                        
                        </div>
                        <div>CGPA - {AboutData.gradcgpa}</div>
                    </div>

                    <div className='flex justify-between py-2 px-8 text-[#EEEEEE]'>
                        <div>{AboutData.hsSchool}</div>
                        <div>{AboutData.hscgpa}</div>
                    </div>

                    <div className='flex justify-between py-2 px-8 text-[#EEEEEE]'>
                        <div>{AboutData.sscSchool}</div>
                        <div>{AboutData.ssccgpa}</div>
                    </div>
                    
                </div>




                <div className='flex flex-col bg-[#507687] px-4 py-5 rounded-md mt-4'>
                    <h1 className='font-cursive tracking-[0.08rem] text-4xl text-slate-300 mb-2'>Certifications</h1>

                    <div className='flex justify-between py-2 px-8 text-white'>
                        <div>
                            <p className='font-medium'>{AboutData.certifications.c1}</p>
                            <p className='text-zinc-300 text-sm'>{AboutData.certifications.c1sub}</p>
                            </div>
                        <div>{AboutData.certifications.score}</div>
                    </div>

                    <div className='flex justify-between py-2 px-8 text-[#EEEEEE]'>
                        <div>
                            <p className='font-medium'>{AboutData.certifications.c2}</p>
                            <p className='text-zinc-300 text-sm'>{AboutData.certifications.c2sub}</p>
                            </div>
                    </div>
                    
                </div>
                    
                
            </div>
        </div>



        <div className='flex flex-col mt-6 lg:mt-0 lg:w-[40%] py-6 px-10 bg-[#C1D8C3] rounded-xl bg-opacity-50 gap-4 drop-shadow-xl'>

                    <p className='text-center tracking-widest text-xl mb-2 text-white'>TECH STACK</p>
                    
            <div className='flex gap-4 justify-center items-center bg-slate-200 rounded-2xl px-6 py-1'>
                <div className='flex-1 text-justify'>
                    <p className='font-sans tracking-wider text-xl font-semibold text-slate-800'>JavaScript</p>
                </div>
                <div className='w-10 justify-center items-center'><img src={jsImg} alt='JavaScript Icon' className='drop-shadow-xl ' /></div>
            </div>



            <div className='flex gap-4 justify-center items-center bg-slate-200 rounded-2xl px-6 py-1 hover:'>
                <div className='flex-1 text-justify'>
                    <p className='font-sans tracking-wider text-xl font-semibold text-slate-800'>React JS</p>
                </div>
                <div className='w-10 justify-center items-center'><img src={reactImg} alt='React Icon' className='drop-shadow-xl ' /></div>
            </div>
            


            <div className='flex gap-4 justify-center items-center bg-slate-200 rounded-2xl pl-6 pr-1 py-1'>
                <div className='flex-1 text-justify'>
                    <p className='font-sans tracking-wider text-xl font-semibold text-slate-800'>Tailwind CSS</p>
                </div>
                <div className='w-14 p-2 mr-5 justify-center items-center'><img src={tailwindImg} alt='Tailwind CSS Icon' className='drop-shadow-xl ' /></div>
            </div>



            <div className='flex gap-4 justify-center items-center bg-slate-200 rounded-2xl pl-6 pr-1 py-1'>
                <div className='flex-1 text-justify'>
                    <p className='font-sans tracking-wider text-xl font-semibold text-slate-800'>MongoDB</p>
                </div>
                <div className='w-16 justify-center items-center'><img src={mongodbImg} alt='MongoDB Icon' className='drop-shadow-xl ' /></div>
            </div>




            <div className='flex gap-4 justify-center items-center bg-slate-200 rounded-2xl pl-6 pr-1 py-1'>
                <div className='flex-1 text-justify'>
                    <p className='font-sans tracking-wider text-xl font-semibold text-slate-800'>Express</p>
                </div>
                <div className='w-16 justify-center items-center'><img src={expressImg} alt='Express Icon' className='drop-shadow-xl ' /></div>
            </div>



            <div className='flex gap-4 justify-center items-center bg-slate-200 rounded-2xl px-6 py-1'>
                <div className='flex-1 text-justify'>
                    <p className='font-sans tracking-wider text-xl font-semibold text-slate-800'>Node</p>
                </div>
                <div className='w-9 justify-center items-center'><img src={nodeImg} alt='Node Icon' className='drop-shadow-xl ' /></div>
            </div>



            <div className='bg-[#E7CCCC] flex justify-between p-4 rounded-xl font-sans'>

                <div className='flex flex-col justify-center items-center w-[25%]'>
                    
                    <img className='w-[3rem] lg:w-[4rem]' src={cppImg}/>
                    <p>C++</p>
                </div>

                <div className='flex flex-col justify-center items-center w-[25%]'>
                    <img className='w-[3rem] lg:w-[4rem]'  src={pythonImg}/>
                    <p>Python</p>                    
                </div>

                <div className='flex flex-col justify-center items-center w-[25%]'>
                    <img className='w-[3rem] lg:w-[4rem]'  src={htmlImg}/>
                    <p>HTML</p>                   
                </div>

                <div className='flex flex-col justify-center items-center w-[25%]'>
                    <img className='w-[3rem] lg:w-[4rem]' src={cssImg}/>
                    <p>CSS</p>
                </div>
                
            </div>
            



            <div className='bg-[#E7CCCC] flex justify-between p-4 rounded-xl font-sans'>

                <div className='flex flex-col justify-center items-center w-[25%]'>
                    
                    <img className='w-[4rem]' src={prImg}/>
                    <p className='hidden lg:block'>PremierePro</p>
                </div>

                <div className='flex flex-col justify-center items-center w-[25%]'>
                    <img className='w-[4rem]'  src={aeImg}/>
                    <p className='hidden lg:block'>After Effects</p>                    
                </div>

                <div className='flex flex-col justify-center items-center w-[25%]'>
                    <img className='w-[4rem]'  src={psImg}/>
                    <p className='hidden lg:block'>Photoshop</p>                   
                </div>
                
            </div>

        </div>
    </div>
    </div>
  )
}

export default About;