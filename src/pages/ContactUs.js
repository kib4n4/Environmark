import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import './pages.css';
import Footer from "../components/footer";
import "./contactUs.css";

const cardData = [
  
  {
    imageUrl: "./Images/logo2.png",
    cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, send do eiusmod tempor incididunt ut labore etc",
    cardTitle: "CONTACT US"
    
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
        <div className="icons">
          <img className="in" src="https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-on-transparent--background-PNG.png" alt="LinkedIn" />
          <div>
            <img className="app" src="https://p7.hiclipart.com/preview/922/489/218/whatsapp-icon-logo-whatsapp-logo-png.jpg" alt="WhatsApp" />
          </div>
          <div>
            <img className="mail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZKJsjbnKDB6PLFK4GU8jjv0zoIR4WB6AAIA&s" alt="Mail" />
          </div>
          <div>
            <img className="phone" src="https://t4.ftcdn.net/jpg/05/04/07/83/360_F_504078395_9Fo5jWrwI8Pbfr6hrPRUvUMsjR1R3Pvy.jpg" alt="Phone" />
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default ContactUs;