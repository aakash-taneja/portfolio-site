import { useEffect, useState } from "react";

const HeroSection = () => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [title, setTitle] = useState("Your Title"); // Set your initial title here
  // const [isHovered, setIsHovered] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const handleMouseMove = (e: any) => {
    const position = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;
    setTransform({ x: x * 0.1, y: y * 0.1 });
  };

  setTimeout(() => {
    setAnimationClass("animate");
  }, 500);

  const handleMouseOut = () => {
    setTransform({ x: 0, y: 0 });
    // setIsHovered(false);
  };
  // const handleMouseOver = () => {
  //   setTitle("Aakash Taneja");
  //   // setIsHovered(true);
  // };
  useEffect(() => {
    setTitle("Aakash Taneja");
  }, []);
  return (
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
                transition: "all 0.3s ease-out",
              }}
            />
          </div>
          <div className="text-container">
            <h1 className={`title ${animationClass}`}>
              Hey, <br />I am{" "}
              <span className="title title-name" data-title={title}>
                {title}
              </span>
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
