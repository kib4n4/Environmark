import React from "react";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Ourservices from "./pages/Ourservices";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import DisplayArea from "./components/DisplayArea";
function App() {
  return (
    <>
      <nav className="title">
        <h1 id="title">ENVIRONMARK Ltd</h1>
          <p>Innovative. Sustainable. Environmental solutions</p>
          <button className="contactusbttn"><ContactUs/></button>
          <button className="portfoliobttn"><Portfolio/></button>
          <button className="ourservicesbttn"> <Ourservices/></button>
          <button className="aboutbttn"> <About /></button> 
          <button className="homebttn"><Home /></button> 
          
       
        <hr />
      </nav>
      <div>
      <DisplayArea/>
<div>

</div>
   
      </div>
    </>
  );
}

export default App;
