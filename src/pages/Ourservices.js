import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import './about.css' 
import Footer from "../components/footer";


const cardData = [
  {
    imageUrl:
      "https://www.shutterstock.com/image-vector/environmental-impact-assessment-effect-analysis-260nw-2217260099.jpg",
   
    cardText:
          <div>
              <ul>
            <li>Environmental Management</li>
            <li>Environmental Impact Assessment</li>
            <li>Occupational Safety and Health</li>
            <li>Climate Change</li>
            <li>Audit Assessment</li>
        
              </ul>
    
         </div>
   
  },
];

function Ourservices() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="about-section">
       
          <div className="about-content">
            <Card
              imageUrl={cardData[0].imageUrl}
              cardText={cardData[0].cardText}
              cardTitle={cardData[0].cardTitle}
            />
          </div>
        </section>
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
