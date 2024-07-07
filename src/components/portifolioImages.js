import { useMemo, useState } from "react";
import Image1 from "../assets/images/image1.jpeg";
import Image2 from "../assets/images/image2.jpeg";
import Image3 from "../assets/images/image3.jpeg";
import Image4 from "../assets/images/image4.jpeg";
import Image5 from "../assets/images/image5.jpeg";
import Image6 from "../assets/images/image6.jpeg";
import Image7 from "../assets/images/image7.jpeg";
import Image8 from "../assets/images/image8.jpeg";
import Card, { Imagecard } from "./Card";
import "./portifolioImages.css";

const projects = [
  { img: Image1, text: "Hello Vietname asjd sdjkajksdn " },
  { img: Image2, text: "Hello Vietname asjd sdjkajksdn " },
  { img: Image3, text: "Hello Vietname asjd sdjkajksdn " },
  { img: Image4, text: "Hello Vietname asjd sdjkajksdn " },
  { img: Image5, text: "Hello Vietname asjd sdjkajksdn " },
  { img: Image6, text: "Hello Vietname asjd sdjkajksdn " },
  { img: Image7, text: "Hello Vietname asjd sdjkajksdn " },
  { img: Image8, text: "Hello Vietname asjd sdjkajksdn " },
];

export default function ProductComp() {
  const [index, setIndex] = useState(0);
  const project = useMemo(() => projects[index], [index]);

  return (
    <div>
      <div className="about-us-text">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Imagecard description={""} imageUrl={project?.img} />
          </div>
          <div className="col-md-6">
            <div className="text-center text-md-start">{project?.text}</div>
          </div>
        </div>
      
       
      </div>
      <hr />
      <h3 className="text-center">Projects</h3>
      <hr />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {projects.map((project, i) => (
          <div className="col" key={i}>
            <Card
              image={project.img}
              text={project.text}
              className="h-100 shadow-sm rounded-3"
              imageClassName="rounded-3"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        {index > 0 && (
          <button
            className="btn"
            onClick={() => {
              setIndex(index - 1);
            }}
          >
            prev
          </button>
        )}
        {index < projects.length - 1 && (
          <button
            className="btn"
            onClick={() => {
              setIndex(index + 1);
            }}
          >
            next
          </button>
        )}
      </div>
    </div>
  );
}
