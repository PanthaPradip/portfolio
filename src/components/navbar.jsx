import React from 'react'
import { useState, useEffect } from 'react';

function Navbar() {

    const navArr = ['Explore','Blog','About','Social','Contact'];


    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


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
  


  return (

   
    <div className={`fixed z-[999] w-full px-20 py-7 font-sans flex justify-between items-center backdrop-blur-sm bg-white/30 transition-all duration-700 ease-in-out ${isVisible ? "top-0" : "-top-24"}`}>

        
        <a className='text-2xl ml-2'>Pantha Pradip</a>

        <div className="flex gap-10">
            {(navArr.map((item, index)=>
                
                <a className={`text-lg font-light cursor-pointer active:text-red-700 hover:border-b-[1px] hover:border-slate-700 transition-all ease-in duration-200 ${index === (navArr.length-1) && "ml-32"}`} key={index}
                
                href={item==='About' ? '#about' : item==='Contact' ? '#footer' : item==='Explore' ? '#play' : item==='Social' ? '#footer' : '#'}
                
                
                >{item}</a>
            ))}
        </div>
     
    </div>
  )
}

export default Navbar