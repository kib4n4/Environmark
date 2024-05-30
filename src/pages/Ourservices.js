import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

function Ourservices(){
     return(
     <>
     <header>
        <NavBar/>
     </header>
     <main>
        <h3 id="about">Our services<i class="fas fa-servicestack    "></i></h3>
    {/*display cards that will contain information about the company services */}
<Card/>
     </main>
     
     </>); 
 }
  export default Ourservices;