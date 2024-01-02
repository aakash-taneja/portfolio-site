import { useEffect, useState } from "react";
import ProjectSingle from "./ProjectSingle";
import transition from "../transition";

const ProjectSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [moveWork, setMoveWork] = useState(false);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setScrollDirection(currentScrollPosition > scrollPosition ? "down" : "up");
    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
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
    <div className="project-section " style={{ width: "100%" }} id="work">
      <div className="maxwidth">
        <div
          className={` large-headings workHeading ${
            moveWork ? "move-right" : ""
          }`}
        >
          Work
        </div>
        <div className="projects-container">
          <div className="project-row">
            <div className="project-row-left">
              <ProjectSingle
                image="Macha.jpg"
                title="Macha"
                tag1="Next.js"
                tag2="Typescript"
                href="/project1"
              />
            </div>
            <div className="project-row-right">
              <ProjectSingle
                image="dstore.png"
                title="dStore01"
                tag1="Next.js"
                tag2="Typescript"
                href="/project2"
              />
            </div>
          </div>
          <div className="project-row-last">
            <ProjectSingle
              image="pir.png"
              title="Paint It Red"
              tag1="Wordpress"
              tag2="CSS"
              href="/project3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(ProjectSection);
