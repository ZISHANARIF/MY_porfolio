import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Cont from './components/Cont'
import Footer from './components/Footer'
import FloatingParticles from './components/FloatingParticles'



const App = () => {
  return (
    <div>
      <FloatingParticles/>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      {/* <MyWork/> */}
      <Cont/>
      <Footer/>
   
    </div>
  )
}

export default App