import { useState } from 'react'
import Navbar from './components/Navbar'
import LandinPage from './components/LandinPage'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className='w-ful min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandinPage/>
      <Marque/>
      <About/>
      <Eyes/>
      <Feature/>
      <Cards/>
    </div>
    </>
  )
}

export default App
