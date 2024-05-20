import {NavLink} from "react-router-dom";

function NavBar(){
    return(
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
    )
};
export default NavBar;