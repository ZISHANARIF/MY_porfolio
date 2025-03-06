import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div id='footer' className="footer">
      <hr />
      <div className="footer-bottom">
        <div>
          <p>Copyright &copy; 2025, All Right Reserved</p>
        </div>
        <div className='footer-r'>
          <a href="https://www.linkedin.com/in/zishan-arif-7b272821b/" target="_blank" rel="noopener noreferrer">
            <img src='/link.svg' alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
