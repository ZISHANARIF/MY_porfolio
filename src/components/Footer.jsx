import React from 'react'
import './Footer.css'
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div id='footer' className="footer">

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