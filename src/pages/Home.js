import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import ImageLogo from "../components/image";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      <Card/>
      <ImageLogo/>
      </main>
    </>
  );
}

export default Home;
