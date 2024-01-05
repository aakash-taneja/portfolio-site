import { Link } from "react-router-dom";
import transition from "../transition";
import MagneticButton from "./MagneticButton";
import NavTop from "./NavTop";

const Project3 = () => {
  return (
    <>
      <NavTop />
      <div
        style={{
          // border: "2px solid blue",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",

          backgroundImage: `url('pir.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            paddingTop: "100px",
            height: "100%",
            width: "100%",
            backdropFilter: "blur(5px) grayscale(35%) ",
            paddingLeft: "7rem",
            paddingRight: "7rem",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "50%" }}>
              <h1 className="project-heading">PaintItRed</h1>
              <MagneticButton
                onClick={() => {
                  window.open("https://paintitred.in/");
                }}
                filled="false"
              >
                <div style={{ display: "flex" }}>
                  <div className="buttonText">Live Link</div>
                  <img src="greenarrow.svg" style={{ marginLeft: "10px" }} />
                </div>
              </MagneticButton>
            </div>
            <div style={{ width: "40%" }}>
              As a UI Developer at Paint It Red (NGO), I played a pivotal role
              in advancing the organization's mission to combat gender
              disparity. By crafting and implementing a fully responsive
              WordPress website, I contributed to enhancing community
              empowerment initiatives. Paint It Red, founded by two dedicated
              women, serves as a catalyst for positive change, channeling their
              passion into meaningful projects. Through my expertise, I
              successfully translated the NGO's objectives into an engaging
              online platform, fostering awareness and support for the noble
              cause. This experience not only honed my UI development skills but
              also allowed me to contribute to a meaningful social cause.
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              right: "7rem",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              // width: "100%",
              // display: "flex",
              // justifyContent: "flex-end",
            }}
          >
            <Link to="/project1">Next Project</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Project3);
