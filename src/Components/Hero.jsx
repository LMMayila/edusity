// import React from 'react'
import '../styles/Hero.css'
import dark_arrow from '../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
           <h1>Small Startups, Big Dreams</h1>
           <p>The Start Small Foundation empowers startup founders to transform modest beginnings into remarkable success stories. Through essential support and networking, we nurture the entrepreneurial spirit to turn small startups into impactful businesses.


            </p> 
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero