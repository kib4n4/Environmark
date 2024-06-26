import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/footer";
import Card from "./components/Card";
import ProductComp from "./components/product-comp";
function App() {
   

    const cardData = {
        imageUrl:
          "https://www.shutterstock.com/image-vector/environmental-impact-assessment-effect-analysis-260nw-2217260099.jpg",
       
        cardText:
          "Environmark Limited is a private limited consulting company incorporated in Kenya in December 2017 under the Companies Act, 2015. We offer consultancy services in environmental management, environmental impact and audit assessment, occupational safety and health and climate change. Our staff are highly qualified, experienced and client focused in delivering innovative, efficient and cost effective solutions. We partner and work together with other like-minded firms in promoting the sustainable development agenda.",
      
        cardTitle:"HOME PAGE",
        }
    
    
  return (
    <ErrorBoundary>
      <div className="app-container">
        <NavBar />
        <main className="main">
          <div>
          <Card
             imageUrl={cardData.imageUrl}
             cardText={cardData.cardText}
             cardTitle={cardData.cardTitle}
          />

          </div>
         
         <ProductComp/>
  
        </main>
        <footer>
        <Footer/>
      </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
