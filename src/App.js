import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/footer";
import ProductComp from "./components/product-comp";
function App() {
   
  return (
    <ErrorBoundary>
      <div className="app-container">
        <NavBar />
        <main className="main">
            
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

