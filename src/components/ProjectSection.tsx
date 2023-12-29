import ProjectSingle from "./ProjectSingle";
import WordByWordSlideUpAnimation from "./WordByWordSlideUpAnimation";

const ProjectSection = (updateCursor: any) => {
  return (
    <div className="project-section" style={{ width: "100%" }}>
      <div className="large-headings">Work</div>
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
