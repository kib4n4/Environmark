import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="title">ENVIRONMARK Ltd</h1>
             <p className="subtitle">Innovative. Sustainable. Environmental solutions</p>
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
    </header>
  );
}

export default NavBar;
