import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import './pages.css';

const cardData = [
  {
    imageUrl: "https://www.shutterstock.com/image-vector/environmental-impact-assessment-effect-analysis-260nw-2217260099.jpg",
    cardText: "Environmark Limited is a private limited consulting company incorporated in Kenya in December 2017 under the Companies Act, 2015. We offer consultancy services in environmental management, environmental impact and audit assessment, occupational safety and health, and climate change. Our staff are highly qualified, experienced, and client-focused in delivering innovative, efficient, and cost-effective solutions. We partner with other like-minded firms to promote the sustainable development agenda.",
    cardTitle: "HOME PAGE",
  },
];

const Home = () => {
  const { cardText, cardTitle } = cardData[0];

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-content">
        <section className="section">
          <div className="content">
            <Card cardText={cardText} cardTitle={cardTitle} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
