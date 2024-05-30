import React from "react";
import './footer.css';
import { NavLink } from "react-router-dom";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h1 className="footer-title">ENVIRONMARK Ltd</h1>
                <NavLink className="footer-home" to="/">Home</NavLink>
                <NavLink  className="footer-about"to="/about">About</NavLink>
                <NavLink  className="footer-contact"to="/contact">Contact</NavLink>
                <NavLink  className="footer-ourservices" to="/services">Our Services</NavLink>
                <NavLink   className="footer-portfolio"to="/portfolio">Portfolio</NavLink>

                <a>{/* Environmark linkedin profile*/}</a>
                <a>{/* Environmark Facebook profile*/}</a>
                <a>{/* Environmark gmail A/c*/}</a>
                <a>{/* Environmark whatsapp contact profile*/}</a>
                <p>&copy;2021 Environmark.All rights reserved</p>
            </div>
            
        </footer>
    );
};

export default Footer;
