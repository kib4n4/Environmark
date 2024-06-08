import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

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
        <div className="footer-social">
          <a href="https://linkedin.com/company/environmark">
            {/* Environmark linkedin profile */}
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://facebook.com/environmark">
            {/* Environmark Facebook profile */}
            <i className="fab fa-facebook"></i>
          </a>
          <a href="mailto:info@environmark.com">
            {/* Environmark gmail A/c */}
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/123456789">
            {/* Environmark whatsapp contact profile */}
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <p className="footer-copyright">&copy;2021 Environmark. All rights reserved.</p>
      </div>
      <div>
        <p>
            
        </p>
      </div>
    </footer>
  );
}

export default Footer;
