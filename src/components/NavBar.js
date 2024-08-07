import { NavLink } from "react-router-dom";
import './navBar.css';

function NavBar() {
  return (
    <>
      <header className="header">
        <NavLink to="/" className="logo-link">
          <img id="logo" src="./Images/logo1.png" alt="logo" />
        </NavLink>
        <div className="header-text">
          <h1 className="header-title">ENVIRONMARK Ltd</h1>
          <p className="moto">Innovative. Sustainable. Environmental solutions</p>
        </div>
      </header>
      <nav className="nav">
        <div className="nav-links">
          <NavLink to="/" className="nav-link home-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link about-link">
            About
          </NavLink>
          <NavLink to="/ourservices" className="nav-link services-link">
            Our Services
          </NavLink>
          <NavLink to="/portfolio" className="nav-link portfolio-link">
            Portfolio
          </NavLink>
          <NavLink to="/contact" className="nav-link contact-link">
            Contact Us
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
