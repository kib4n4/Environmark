import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import './pages.css' 
import Footer from "../components/footer";
import "./About.css";

const cardData = [
  {
   
    cardText:
      "Environmark Limited is a private limited consulting company incorporated in Kenya in December 2017 under the Companies Act, 2015. We offer consultancy services in environmental management, environmental impact and audit assessment, occupational safety and health and climate change. Our staff are highly qualified, experienced and client focused in delivering innovative, efficient and cost effective solutions. We partner and work together with other like-minded firms in promoting the sustainable development agenda.",
  
    cardTitle:"ABOUT US"
    },
];

function About() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="section">
       
          <div className="content">
            <Card
             
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

export default About;
