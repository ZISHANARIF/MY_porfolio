import React from 'react';
import './Hero.css';
import { NavLink } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='zish' src='/profile.png' alt='Profile' />
      <h1>
        I'm <br />
        <TypeAnimation
          sequence={[
            ' Zishan Arif',
            2000,
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{ fontSize: '2em', display: 'inline-block', color: '#B0B0B0' }}
        />
      </h1>

      <h2>
        <TypeAnimation
          sequence={[
            'MERN Stack Developer', 
            1300,
            'Frontend Developer', 
            1300,
            'Backend Developer',
            1300,
            'Data Analysis',
            1300,
            'Problem Solving Skills',
            1300,
            'Prompt Engineer',
            1300,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2.5em', display: 'inline-block', color: '#B0B0B0' }}
        />
      </h2>

      <p>
        I craft high-performance, feature-rich websites using the MERN stack, blending
        sleek design with robust functionality. Expert in data analysis and problem-solving, 
        I turn complex challenges into strategic solutions. With strong communication and time management,
        I ensure every project is delivered with precision and impact.
      </p>

      <button className='hero-resume'>
        <NavLink className='anchor-link' to="/Zishan_Arif(R).pdf" target="_blank">
          Resume
        </NavLink>
      </button>
    </div>
  );
}

export default Hero;
