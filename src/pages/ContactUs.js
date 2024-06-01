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
      "Environmark Limited is a private limited consulting company incorporated in Kenya in December 2017 under the Companies Act, 2015. We offer consultancy services in environmental management, environmental impact and audit assessment, occupational safety and health and climate change. Our staff are highly qualified, experienced and client focused in delivering innovative, efficient and cost effective solutions. We partner and work together with other like-minded firms in promoting the sustainable development agenda.",
    
    cardTitle:"CONTACT US"
    },
];

function ContactUs() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="contactUs-section">
       
          <div className="contactUs-content">
            <Card
              imageUrl={cardData[0].imageUrl}
              cardText={cardData[0].cardText}
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

export default ContactUs;
