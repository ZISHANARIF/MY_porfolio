import React from 'react'
import './About.css'



const About = () => {
  return (
    
    <div  id='about' className='about'>
        <div className='about-title'>
            <h1>Skills</h1>
            <img className='sicon' src='/student.png' alt=''></img>
        </div>
        <div className="about-skills">
  
                        <img src='/js.svg'></img>
                        <img src='/react.svg'></img>
                        <img src='/nodejs.svg'></img>
                        <img src='/express-js.svg'></img>
                        <img src='/mongodb.svg'></img>
                        <img src='/postgresql.svg'></img>
                        <img src='/power-bi.svg'></img>
                        <img src='/html.svg'></img>
                        <img src='/css.svg'></img>
                        <img src='/ailwind.svg'></img>
                        <img src='/C++.svg'></img>
                        <img src='/java.svg'></img>
                        <img src='/c.svg'></img>
                        <img className='corner' src='/dsa.png'></img>
                        <img className='corner' src='/Pro.png'></img>
        </div>

        <div className="about-achivements">
            <div className="about-achivement">
                <h1>300+</h1>
                <p>Problem solving on LeetCode and GFG.</p>
            </div>
            <hr/>
            <div className="about-achivement">
                <h1>20+</h1>
                <p>project</p>
            </div>
            <hr/>
            <div className="about-achivement">
                <h1>15+</h1>
                <p>Tech Stack Skills Proficiency</p>
            </div>
        </div>

    </div>
    
  )
}

export default About