import React from "react";
import NavBar from "../components/NavBar";

import Footer from "../components/footer";
import ProductComp from "../components/product-comp";



function portfolio() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section>
       
          
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
