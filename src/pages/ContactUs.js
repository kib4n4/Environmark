import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import './pages.css' 
import Footer from "../components/footer";
import "./contactUs.css"
import { SocialIcon } from 'react-social-icons';

const cardData = [
  {
    imageUrl:
    "./Images/logo2.png",
    cardText:
      <div>
       <SocialIcon url="https://linkedin.com/in/couetilc" className="socials" />
           <br/><hr/>
           <SocialIcon network="email" bgColor="" className="socials"/>
            <br/><hr/>
             
             <SocialIcon network="whatsapp" bgColor="" className="socials" />
             <br/><hr/>
             <SocialIcon network="x" bgColor="black" className="socials"/>
            
         
      </div>,
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
        <section className="section">
       
          <div className="content">
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
