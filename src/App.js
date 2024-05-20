import React from "react";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Ourservices from "./pages/Ourservices";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import DisplayArea from "./components/DisplayArea";
import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <nav className="title">
          <h1 id="title">ENVIRONMARK Ltd</h1>
          <p>Innovative. Sustainable. Environmental solutions</p>
          <div className="nav-links">
            <NavLink to="/contact" className="contactusbttn">Contact Us</NavLink>
            <NavLink to="/portfolio" className="portfoliobttn">Portfolio</NavLink>
            <NavLink to="/ourservices" className="ourservicesbttn">Our Services</NavLink>
            <NavLink to="/about" className="aboutbttn">About</NavLink>
            <NavLink to="/" className="homebttn">Home</NavLink>
          </div>
          <hr />
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
