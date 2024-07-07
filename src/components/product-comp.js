// src/components/ProductComp.jsx
import { useMemo, useState } from "react";
import Image1 from "../assets/images/image1.jpeg";
import Image2 from "../assets/images/image2.jpeg";
import Image3 from "../assets/images/image3.jpeg";
import Image4 from "../assets/images/image4.jpeg";
import Image5 from "../assets/images/image5.jpeg";
import Image6 from "../assets/images/image6.jpeg";
import Image7 from "../assets/images/image7.jpeg";
import Image8 from "../assets/images/image8.jpeg";
import Card from "./Card";
import "./product-comp.css"; // Add a new CSS file for component-specific styles

const projects = [
  { img: Image1, text: "Project 1: Hello Vietnam" },
  { img: Image2, text: "Project 2: Exploring the Countryside" },
  { img: Image3, text: "Project 3: Discovering Ancient Ruins" },
  { img: Image4, text: "Project 4: Experiencing the City Life" },
  { img: Image5, text: "Project 5: Tasting the Local Cuisine" },
  { img: Image6, text: "Project 6: Hiking through the Mountains" },
  { img: Image7, text: "Project 7: Visiting Cultural Landmarks" },
  { img: Image8, text: "Project 8: Discovering Hidden Gems" },
];

export default function ProductComp() {
  const [index, setIndex] = useState(0);
  const project = useMemo(() => projects[index], [index]);

  const handleNext = () => {
    if (index < projects.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="product-comp">
      <div className="main-display">
        <Card description={project.text} imageUrl={project.img} />
        <div className="navigation-buttons">
          <button className="btn btn-primary" onClick={handlePrevious} disabled={index === 0}>
            Previous
          </button>
          <button className="btn btn-primary" onClick={handleNext} disabled={index === projects.length - 1}>
            Next
          </button>
        </div>
      </div>
     
    </div>
  );
}
