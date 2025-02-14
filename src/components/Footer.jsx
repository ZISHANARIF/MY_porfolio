import React from 'react'
import './Footer.css'
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div id='footer' className="footer">

        {/* <div className="footer-top">
            <div className="footer-top-left">
                <img src='' alt='foot'/>
                <p>Learn How To Create Portfolio Website In React JS. Build Complete React JS Website Step by Step and deploy it online. </p>

            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src=' ' alt='imgage'/>
                    <input type='email' placeholder='Enter mail'/>
                </div>
                
            </div>
        </div> */}
        <hr/>
        <div className="footer-bottom">
            <div>
                <p>Copyright &copy; 2025, All Right Reserved</p>   
            </div>
            <div className='footer-r'>
                <span>Linkdin  </span>
                <NavLink to="https://www.linkedin.com/in/zishan-arif-7b272821b/" target="_blank">
                  Zishan Arif
                </NavLink>
            </div>
        </div>

    </div>
  )
}

export default Footer