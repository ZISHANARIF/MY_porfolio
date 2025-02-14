import React from 'react'
import './Hero.css'
import { NavLink } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className='zish' src='/zishan.jpeg' alt=''></img>
        <h1>
        I'm 
        <br/>
        <TypeAnimation
          sequence={[
            ' Zishan Arif',   // Name typed once
            2000,             // Wait for 2 seconds
          ]}
          wrapper="span"
          cursor={false}     // No cursor after the name is typed
          repeat={0}         // No repetition
          style={{ fontSize: '3em', display: 'inline-block', color: '#B0B0B0', fontWeight: 'bold'  }}
        />
      </h1>
        
        <h2>
        <TypeAnimation
          sequence={[
            'Software Engineer', // Text 1
            1300,                // Wait for 1 second
            'Web Developer',     // Text 2
            1300,                // Wait for 1 second
            'Frontend Developer',// Text 3
            1300,                // Wait for 1 second
            () => {
              console.log('Done typing!'); // Optional callback
            }
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '4em', display: 'inline-block', color: '#B0B0B0' }}
        />
      </h2>


        <p> Dynamic Software Engineer with expertise in React.js, JavaScript, and C++,
        and problem-solving skills and Experienced in building interactive applications</p>

          <button className='hero-resume' >
          <NavLink className='anchor-link'
              to="/ZISHAN.pdf"
              target="_blank"
              >
              Resume
            </NavLink>
          </button> 
    </div>

  )
}
export default Hero