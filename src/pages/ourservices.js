import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import './pages.css' 
import Footer from "../components/footer";


const cardData = [
  {
    imageUrl:
      "./Images/logo2.png",
   
    cardText:
          <div>
             
<h3 className="ourservices-paragraph">
  We offer the following consultancy services to our clients in the various sectors of development;
  
  </h3>
              <ul>
              <li>Environmental assessment and management</li>
         <li> Social and Environmental Impact Assessment (ESIA).</li>
         <li> Strategic Environmental Assessment (SEA).</li>
         <li> Monitoring and Supervision of Construction sites</li>
         <li> Environmental Audit (EA)</li>
         <li> Resettlement Action Plans (RAPs)</li>
         <li> Environmental and Social Management Frameworks (ESMF)</li>
         <li> Development of Environmental policies and plans</li>
         <li> Development of Waste Management Plans.</li>
         <li> Formulation of Chance Find procedures for construction sites</li>
        
              </ul>
    
         </div>,
    cardTitle:"OURSERVICES"
   
  },
];

function Ourservices() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="section">
       
          <div className="content">
            <Card
              imageUrl={cardData[0].imageUrl}
              cardText={cardData[0].cardText}
              cardTitle={cardData[0].cardTitle}
            />
          </div>
        </section>
    
        <div className="ourservices-paragraph">
      
         
        </div>
        <div> 
           <footer>
             <Footer/>
           </footer>
        </div>
      </main>
    </>
  );
}

export default Ourservices;
