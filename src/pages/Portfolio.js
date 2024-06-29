import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/footer";


const cardData = [
  {
    imageUrl:
      "https://www.shutterstock.com/image-vector/environmental-impact-assessment-effect-analysis-260nw-2217260099.jpg",
   
    cardText:""
   
  },
];

function portfolio() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section>
       
          <div >
            <Card
              imageUrl={cardData[0].imageUrl}
              cardText={cardData[0].cardText}
            />
          </div>
        </section>
        {/*insert company portifolio here */}
        <div>
                <footer>
                  <Footer/>
                </footer>
        
        </div>
      
      </main>
    </>
  );
}

export default portfolio;
