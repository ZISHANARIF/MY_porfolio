import React from 'react'
import './Services.css'
import { NavLink } from "react-router-dom";

import Services_Data from '../assets/services_data'


function Services() {
  return (
    <div id='services' className='Services'>
      <div className="services-title">
        <h1>Projects</h1>
        <img className='picon' src='/project.png' alt=''></img>

      </div>
      <div className="services-contianer">
        {Services_Data.map((services, index) => {
          return <div key={index} className='services-fromat'>
            <h3>{services.s_no}</h3>
            <h2>{services.s_name}</h2>
            <p>{services.s_desc}</p>
            <div className="services-readmore">

              <button>
              <NavLink className='anchor-link'
                  to={services.project}
                  target="_blank"
                  >
                  <span>Explore</span>
                </NavLink>
              </button>
            </div>
          </div>
        })}
      </div>
    </div>

  )
}

export default Services