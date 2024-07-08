import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-title-section">
          <h1 className="footer-title">Environmark</h1>
        </div>
        <div className="footer-section footer-links-section">
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
        </div>
        <div className="footer-section footer-social-section">
          <SocialIcon url="https://linkedin.com/in/couetilc" className="socials" />
          <SocialIcon network="email" className="socials" />
          <SocialIcon network="whatsapp" className="socials" />
          <SocialIcon network="x" bgColor="black" className="socials" />
        </div>
        <div className="footer-section footer-copyright-section">
          <p>&copy; 2021 Environmark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
