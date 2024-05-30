import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/footer";
function App() {
  return (
    <ErrorBoundary>
      <div className="app-container">
        <NavBar />
        <main className="main">
          <Outlet />
        </main>
        <footer>
        <Footer/>
      </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
