// src/components/ProductComp.jsx
import { useMemo, useState } from "react";
import Image1 from "../assets/images/image1.jpeg";
import Image2 from "../assets/images/image2.jpeg";
import Image3 from "../assets/images/image3.jpeg";
import Image4 from "../assets/images/image4.jpeg";
import Image5 from "../assets/images/image5.jpeg";
import Image6 from "../assets/images/image6.jpeg";
import Image7 from "../assets/images/image8.jpeg";
import Card from "./Card";
import "./product-comp.css"; // Add a new CSS file for component-specific styles

const projects = [
  { img: Image1, text: "Project 1: Wildlife Conservation" },
  { img: Image2, text: "Project 2: Flower farms Environmental Audit" },
  { img: Image3, text: "Project 3: Hot water solar Installation" },
  { img: Image4, text: "Project 4: Industrial Plants Environmental, Health and Safety Audits" },
  { img: Image5, text: "Project 5: Environmental Assessment and Audits for Transport Infrastructure" },
  { img: Image6, text: "Project 6: Environmental, Health and Safety Assessment for Sewerage Infrastructure" },
  { img: Image7, text: "Project 8: Public and Stakeholder Consultations" },
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
