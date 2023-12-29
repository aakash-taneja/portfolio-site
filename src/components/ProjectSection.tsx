import { useEffect, useState } from "react";
import ProjectSingle from "./ProjectSingle";
import WordByWordSlideUpAnimation from "./WordByWordSlideUpAnimation";

const ProjectSection = (updateCursor: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [moveWork, setMoveWork] = useState(false);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setScrollDirection(currentScrollPosition > scrollPosition ? "down" : "up");
    setScrollPosition(currentScrollPosition);
  };
  useEffect(() => {
    // Handle initial scroll position on mount
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    const threshold = window.innerHeight / 2; // Midpoint threshold
    const moveThreshold = threshold * 2; // Scroll threshold to start moving

    if (
      scrollDirection === "down" &&
      scrollPosition >= threshold &&
      scrollPosition <= moveThreshold
    ) {
      setMoveWork(true);
    } else if (scrollDirection === "up" && scrollPosition < threshold) {
      setMoveWork(false);
    }
  }, [scrollPosition, scrollDirection]);

  return (
    <div className="project-section" style={{ width: "100%" }} id="#work">
      <div
        className={`large-headings workHeading ${moveWork ? "move-right" : ""}`}
      >
        Work
      </div>
      <div className="projects-container">
        <div style={{ display: "flex", width: "100%", height: "30rem" }}>
          <div
            style={{ width: "50%", display: "flex", alignItems: "flex-start" }}
          >
            <ProjectSingle updateCursor={updateCursor} />
          </div>
          <div
            style={{ width: "50%", display: "flex", alignItems: "flex-end" }}
          >
            <ProjectSingle updateCursor={updateCursor} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "60%",
            marginTop: "2rem",
            justifyContent: "center",
          }}
        >
          <ProjectSingle updateCursor={updateCursor} />
        </div>
      </div>
      <WordByWordSlideUpAnimation text="Aakash" />
    </div>
  );
};

export default ProjectSection;
