import { useState } from "react";

const ProjectSingle = (updateCursor: any) => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [transformText, setTransformText] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: any) => {
    const position = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;
    setTransform({ x: x * 0.15, y: y * 0.15 });
    setTransformText({ x: x * 0.05, y: y * 0.05 });
    updateCursor(true);
  };

  const handleMouseOut = () => {
    setTransform({ x: 0, y: 0 });
    updateCursor(false);
  };
  return (
    <div
      style={{
        width: "90%",
        // height: "33.5rem",
        // border: "2px solid green",
        position: "relative",
        padding: "10px",
      }}
    >
      <img
        src="project1.png"
        width={"90%"}
        height={"100%"}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        style={{
          objectFit: "cover",
          transform: `translate(${transform.x}px, ${transform.y}px)`,
          transition: "all 0.3s ease-out",
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
          <span className="title title-name" data-title="Project 1">
            Project 1
          </span>
          <h1 className="project-tags">HTML</h1>
          <h1 className="project-tags">CSS</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingle;
