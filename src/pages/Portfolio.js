import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/footer";
import ProductComp from "../components/product-comp";

const cardData = [
  {
    
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
             
              cardText={cardData[0].cardText}
            />
          </div>
          <div>
            <ProductComp/>
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
