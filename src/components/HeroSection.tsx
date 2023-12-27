import React, { useState } from "react";

const HeroSection = () => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: any) => {
    const position = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;
    setTransform({ x: x * 0.1, y: y * 0.1 });
  };

  const handleMouseOut = () => {
    setTransform({ x: 0, y: 0 });
  };
  return (
    // <div className="center-container">
    //   <div className="content-container">
    //     <img src="myPhoto.jpg" alt="Your Image" className="image" />
    //     <div className="text-container">
    //       <h1 className="title">Your Title</h1>
    //       <p className="description">Your one-line text description.</p>
    //     </div>
    //   </div>
    // </div>
    <>
      <div
        style={{
          // border: "2px solid blue",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div
          className="center-container"
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
        >
          <div className="image-container">
            <img
              src="myPhoto.jpg"
              alt="Your Image"
              className="image"
              style={{
                transform: `translate(${transform.x}px, ${transform.y}px)`,
                transition: "transform 0.3s ease-out",
              }}
            />
          </div>
          <div className="text-container">
            <h1 className="title">
              Hey, <br />I am Aakash Taneja
            </h1>
            <p className="description">
              A multidisciplinary frontend developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
