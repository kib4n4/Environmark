import React from "react";
import NavBar from "../components/NavBar";
import "./Home.css"; // Assuming you have a separate CSS file for the Home component

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="hero">
          <h1>Welcome to ENVIRONMARK Ltd</h1>
          <p>Innovative. Sustainable. Environmental solutions</p>
          <button className="cta-button">Learn More</button>
        </section>
        <section className="features">
          <h2>Our Services</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <img src="/images/service1.jpg" alt="Service 1" />
              <h3>Environmental Consulting</h3>
              <p>
                We provide expert advice and solutions for environmental
                challenges.
              </p>
            </div>
            <div className="feature-card">
              <img src="/images/service2.jpg" alt="Service 2" />
              <h3>Sustainability Projects</h3>
              <p>
                Helping businesses and communities implement sustainable
                practices.
              </p>
            </div>
            <div className="feature-card">
              <img src="/images/service3.jpg" alt="Service 3" />
              <h3>Renewable Energy Solutions</h3>
              <p>
                Designing and implementing renewable energy systems for a
                greener future.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
