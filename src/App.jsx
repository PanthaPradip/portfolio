import React from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/landing-page'
import Marquee from './components/marquee';
import About from './components/about';
import BgPlay from './components/bg-play';
import Projects from './components/projects';
import Cards from './components/cards';
import Footer from './components/footer';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState } from 'react'

function App() {

  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    setScroll(scrollInstance);
    return () => {
      if (scrollInstance) {
        scrollInstance.destroy(); 
      }
    };
  }, []); 


  return (
    <div  className='w-full bg-[#F5F7F8] min-h-screen' data-scroll-container>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <BgPlay/>
      <Projects/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App;