import React from 'react'
import './Hero.css'
import profile from '../assets/profile.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile} alt=''></img>
        <h1><span>I'm Zishan Arif</span> Dynamic Software Engineer</h1>
        <p> Dynamic Software Engineer with expertise in React.js, JavaScript, and C++,
        and problem-solving skills and Experienced in building interactive applications</p>

        <div className='hero-action'>
            <div className="hero-connect">Coonect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>

  )
}
export default Hero