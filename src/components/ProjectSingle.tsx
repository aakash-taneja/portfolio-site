import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectSingle = ({ image, title, tag1, tag2, href }: any) => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [transformText, setTransformText] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: any) => {
    const position = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;
    setTransform({ x: x * 0.15, y: y * 0.15 });
    setTransformText({ x: x * 0.05, y: y * 0.05 });
    // updateCursor(true);
    // setIsHovered(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setTransform({ x: 0, y: 0 });
    setIsHovered(false);
    // updateCursor(false);
  };
  return (
    <Link to={href}>
      <div
        className="project-single-container"
        style={{
          width: "90%",
          // height: "33.5rem",
          // border: "2px solid green",
          position: "relative",
          padding: "10px",
        }}
        onMouseEnter={handleMouseEnter}
      >
        <img
          className="project-image"
          src={image}
          width={"90%"}
          height={"100%"}
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
          style={{
            objectFit: "cover",
            transform: `translate(${transform.x}px, ${transform.y}px) ${
              isHovered ? "scale(0.96)" : ""
            } `,
            // transform: "",
            transition: "all 0.3s ease-out",
            filter: `${isHovered ? "grayscale(0%)" : "grayscale(30%)"}`,
          }}
        />
        <div
          style={{
            // color: "#000",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "50%",
            // width: " 90%",
            right: 0,
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              transform: `translate(${transformText.x}px, ${transformText.y}px)`,
              transition: "all 0.3s ease-out",
            }}
          >
            <span className="title title-name" data-title={title}>
              {title}
            </span>
            <h1 className="project-tags">{tag1}</h1>
            <h1 className="project-tags">{tag2}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectSingle;
