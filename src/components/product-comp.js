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
      <h3 className="text-center">Projects</h3>
      <hr />
      <div className="row">
        <div className="col">
          <Imagecard description={""} imageUrl={project?.img} />
        </div>
        <div className="col">
          <div>{project?.text}</div>
        </div>
      </div>
      <div className="text-center">
      {index > 0 && <button className="icon fw-bold" onClick={() => {setIndex(index-1)}}> {'<'} </button>}
      {index <= projects.length && <button  className="icon fw-bold"  onClick={() => {setIndex(index+1)}}> {'>'} </button>}
        
      </div>
    </div>
  );
}
