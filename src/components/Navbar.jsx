import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>

        <p className='oyo'>Zishan Arif/</p>
        <ul className='nav-menu'>
            <li> <AnchorLink className='anchor-link' offset={50} href='#home'><p className='h' onClick={() => ("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p className='a' onClick={() => ("about")}>About Me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p className='s' onClick={() => ("services")}>Services</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#mywork'><p className='m' onClick={() => ("mywork")}>Portfolio</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p className='c' onClick={() => ("contact")}>Contact</p></AnchorLink></li>
        </ul>
    </div>
  )
}

export default Navbar