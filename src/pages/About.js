import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import './Card.css';
const cardData=[
   {
      imageUrl:'https://www.shutterstock.com/image-vector/environmental-impact-assessment-effect-analysis-260nw-2217260099.jpg',
      description:'this is a description of the about page',
   }
];
 function About(){
     return(
     <>
     <header>
        <NavBar/>
     </header>
     <main>
     <h3 id="about">About Us</h3>
     {/*use card that will include description about the company */}
     <div className="aboutCard">
    <Card imageUrl={cardData.imageUrl} description={cardData.description}/>
  
      <img />
   </div>
     
   
     </main>
        
        
     </>
        );
 };
  export default About;