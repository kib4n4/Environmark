import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-title">Environmark</h1>
        <ul className="footer-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/ourservices">Our Services</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
        
        <p className="footer-copyright">&copy;2021 Environmark. All rights reserved.</p>
        
         
            
            <SocialIcon url="https://linkedin.com/in/couetilc" className="socials" />
           
            <SocialIcon network="email" bgColor="" className="socials"/>
              
              <SocialIcon network="whatsapp" bgColor="" className="socials" />
              
              <SocialIcon network="x" bgColor="black" className="socials"/>
             
          
     
       
      </div>
      <div>
        <p>
            
        </p>
      </div>
    </footer>
  );
}

export default Footer;
