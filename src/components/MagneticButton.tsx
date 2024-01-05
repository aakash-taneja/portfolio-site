import React from "react";
import { useState } from "react";

const MagneticButton = ({ children, onClick, filled }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isExiting, setIsExiting] = useState(false);
  const handleMouseMove = (e: any) => {
    const position = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;
    setTransform({ x: x * 0.3, y: y * 0.3 });
    setIsHovered(true);
    setIsExiting(false);
  };
  const handleMouseOut = () => {
    setTransform({ x: 0, y: 0 });
    setIsHovered(false);
    setIsExiting(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsExiting(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsExiting(true);
  };
  return (
    <div
      className={`magnetic-button ${isHovered ? "hovered" : ""} ${
        isExiting ? "exit" : ""
      } ${filled == true ? "whiteBg" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        transition: "all 0.3s ease-out",
      }}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          onMouseEnter: handleMouseEnter,
          onMouseMove: handleMouseMove,
          onMouseOut: handleMouseOut,
          onMouseLeave: handleMouseLeave,
        });
      })}
    </div>
  );
};

export default MagneticButton;
