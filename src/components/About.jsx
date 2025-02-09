import React from 'react'
import './About.css'
import profile from '../assets/profile.jpg'


const About = () => {
  return (
    
    <div className='about'>
        <div className='about-title'>
            <h1>about me</h1>
            <img src={profile} alt=''></img>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt=''></img> 
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> Dynamic Software Engineer with expertise in React.js, JavaScript, and C++,
                    and problem-solving skills and Experienced in building interactive applications</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>html and css</p>
                        <hr style={{width:"50%"}}></hr>
                    </div>

                    <div className="about-skill">
                        <p>react</p>
                        <hr style={{width:"70%"}}></hr>
                    </div>
                     <div className="about-skill">
                        <p>dsa</p>
                        <hr style={{width:"60%"}}></hr>
                    </div>
                     <div className="about-skill">
                        <p>pokimon</p>
                        <hr style={{width:"50%"}}></hr>
                    </div>
                </div>

            </div>
        </div>

        <div className="about-achivements">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>yrearkej of experience</p>
            </div>
            <hr/>
            <div className="about-achivement">
                <h1>90+</h1>
                <p>project complete</p>
            </div>
            <hr/>
            <div className="about-achivement">
                <h1>50+</h1>
                <p>happy colent</p>
            </div>
        </div>

    </div>
    
  )
}

export default About