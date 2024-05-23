import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
function Portfolio(){
    return (
    <>
    <header>
        <NavBar/>
    </header>
    <main>
      <h3 id="home" >Portfolio</h3>
    {/*display cards that will display images and paragraphs about our portfoilios */}
      <Card/>
    </main>
    </>);
    };
export default Portfolio;