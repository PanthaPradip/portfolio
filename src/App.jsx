import React from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/landing-page'
import Marquee from './components/marquee';
import About from './components/about';
import BgPlay from './components/bg-play';
import Projects from './components/projects';
import Cards from './components/cards';
import Footer from './components/footer';



function App() {

    

  return (
    <div  className='w-full bg-[#F5F7F8] min-h-screen'>
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