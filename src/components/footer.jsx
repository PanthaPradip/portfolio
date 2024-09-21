import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";



function Footer() {


  return (
    
    <footer id='footer' className='w-full  bg-[#24262b] flex flex-col pt-32 pb-20 px-40 relative z-20'>

         <div className='w-full flex gap-4 justify-between font-sans border-b-[1px] border-red-400 pb-10'>

          <div>
              <p className='text-white font-semibold text-2xl'>PANTHA</p>
              <p className='text-zinc-400 font-light text-xl leading-none font-cursive'>Pradip</p>
          </div>

          <div className=''>
              <p className='text-white font-semibold text-xl mb-2'>Contact</p>
              <p className='text-zinc-400 text-lg'>(+91) 8017829548</p>
              <p className='text-zinc-400 text-lg'>Email : panthapradip.pp@gmail.com </p>
          </div>

          <div className=''>
              <p className='text-white font-semibold text-xl mb-2'>Address</p>
              <p className='text-zinc-400 text-lg'>India</p>
              <p className='text-zinc-400 text-lg'>Vadodara, Gujarat</p>
              <p className='text-zinc-400 text-lg'>PIN : 390009</p>
          </div>

          <div className=''>
              <p className='text-white font-semibold text-xl mb-2'>Others</p>
              <p className='text-zinc-400 text-lg'>About</p>
              <p className='text-zinc-400 text-lg'>Blogs</p>
              <p className='text-zinc-400 text-lg'>Projects</p>
              <p className='text-zinc-400 text-lg'>Play</p>
          </div>
          
        </div>

        <div className='w-full h-40 flex justify-center items-center gap-6'>
            <a href='https://www.facebook.com/pantha.pradip.7' target="_blank" rel="noopener noreferrer" >
                <FaFacebook className='text-zinc-500 text-3xl hover:text-white transition-all delay-75 ease-in cursor-pointer'/>
            </a>

            <a>
              <FaInstagram className='text-zinc-500 text-3xl hover:text-white transition-all delay-75 ease-in cursor-pointer'/>
            </a>
            <a href='https://github.com/PanthaPradip' target="_blank" rel="noopener noreferrer">
              <FaGithub className='text-zinc-500 text-3xl hover:text-white transition-all delay-75 ease-in cursor-pointer'/>
              </a>
              <a href='https://www.linkedin.com/in/panthapradip/' target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='text-zinc-500 text-3xl hover:text-white transition-all delay-75 ease-in cursor-pointer'/>
              </a>
        </div>

        <div className='bottomgrp flex justify-center items-center flex-col gap-1'>

            
            <MdKeyboardDoubleArrowUp className='text-3xl text-zinc-600'/>
            <a 
                href='#'
            className='text-zinc-600 text-xl hover:text-white transition-all delay-75 ease-in cursor-pointer'>Top</a>
        </div>
    </footer>
   
  )
}

export default Footer