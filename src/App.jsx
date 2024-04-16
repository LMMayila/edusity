import {useState} from 'react'

import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Program from './Components/Program.jsx'
import Title from './Components/Title.jsx'
import About from './Components/About.jsx'
import Campus from './Components/Campus.jsx'
import Testimonials from './Components/Testimonials.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {



  return (
  <>
  <Navbar/>
  <Hero/>
  <div className="container">
    <Title subTitle='Our Program' title='What We Offer'/>
  <Program/>
  <About setPlayState={setPlayState}/>
  <Title subTitle='Gallery' title='SMF Photos'/>
  <Campus/>
  <Title subTitle='Testimonials' title='What Others Say'/>
  <Testimonials/>
  <Title subTitle='Contact Us' title='Get in Touch'/>
  <Contact/>
  <Footer/>
  </div>

 

  </>
  )
}

export default App