import { NavLink } from "react-router-dom";
import './navBar.css';

function NavBar() {
  return (
    <>
      <header className="header">
        <img id="logo" src="./Images/logo1.png" alt="logo" />
        <h1 className="header-title">ENVIRONMARK Ltd</h1>
        <p className="moto">Innovative. Sustainable. Environmental solutions</p>
      </header>
      <nav className="nav">
        <div className="nav-links">
          {/* Use NavLink components to create the navigation links */}
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
