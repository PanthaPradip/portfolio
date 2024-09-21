import React from 'react'
import { useState, useEffect } from 'react';
import { HiBars3 } from "react-icons/hi2";
import { RxCrossCircled } from "react-icons/rx";

function Navbar() {

    const navArr = ['Explore','Blog','About','Social','Contact'];


    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavClicked, setNavbar] = useState(false);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
  
      setLastScrollY(currentScrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollY]);
  

    const navIconMain = ()=>{
       setNavbar(true);
    }
    const navIconSub = ()=>{
       setNavbar(false);
    }

  return (

   
    <div className={`fixed z-[999] w-[100vw] lg:px-20 px-5 py-7 font-sans flex justify-between items-center backdrop-blur-sm bg-white/30 transition-all duration-700 ease-in-out ${isVisible ? "top-0" : "-top-24"}`}>

        
        <a className='text-lg ml-2 lg:text-2xl'>Pantha Pradip</a>

        <div className='hidden lg:block'>
          <div className="flex gap-10">
              {(navArr.map((item, index)=>
                  
                  <a className={`text-lg font-light cursor-pointer active:text-red-700 hover:border-b-[1px] hover:border-slate-700 transition-all ease-in duration-200 ${index === (navArr.length-1) && "ml-32"}`} key={index}
                  
                  href={item==='About' ? '#about' : item==='Contact' ? '#footer' : item==='Explore' ? '#play' : item==='Social' ? '#footer' : '#'}
                  
                  
                  >{item}</a>
              ))}     
          </div>
        </div>


        <div className='block lg:hidden cursor-pointer' onClick={navIconMain}>
                <HiBars3 className='text-2xl'/>
        </div>

        <div className={`absolute h-[100vh] w-[70vw] bg-slate-800 top-0 right-0 block lg:hidden  ${isNavClicked ? "translate-x-[0%]" : "translate-x-[100%]"} transition-all ease-in-out duration-500`}>
             <div>
                  <ul className='py-10 px-10 flex flex-col gap-5'>

                    <div onClick={navIconSub}>
                      <RxCrossCircled className='text-slate-400 text-3xl hover:text-yellow-300 cursor-pointer'/>
                    </div>

                    <div className='border-b-[1px] border-red-500'>
                      <p className='text-2xl text-slate-400 mb-3'>Pantha Pradip</p>
                    </div>
                    
                     {(
                      navArr.map((item,index)=><li className='text-lg text-slate-300' key={index}>{item}</li>)
                     )}
                  </ul>
              </div>
        </div>
     
    </div>
  )
}

export default Navbar