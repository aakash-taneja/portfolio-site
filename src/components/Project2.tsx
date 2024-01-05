import { Link } from "react-router-dom";
import transition from "../transition";
import MagneticButton from "./MagneticButton";
import NavTop from "./NavTop";

const Project2 = () => {
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

          backgroundImage: `url('dstore.png')`,
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
              <h1 className="project-heading" style={{ color: "#000" }}>
                DStore01
              </h1>
              <MagneticButton
                onClick={() => {
                  window.open("https://dstore01.vercel.app/");
                }}
                filled="true"
              >
                <div style={{ display: "flex" }}>
                  <div className="buttonText" style={{ color: "#000" }}>
                    Live Link
                  </div>
                  <img src="greenarrow.svg" style={{ marginLeft: "10px" }} />
                </div>
              </MagneticButton>
            </div>
            <div style={{ width: "40%", color: "#000" }}>
              dStore01 is an innovative file-sharing application that harnesses
              IPFS technology through Lighthouse. The platform enables seamless
              file uploading, viewing, and the creation of shareable download
              links. Its user-friendly interface facilitates image uploading
              with an intuitive drag-and-drop or local storage selection
              feature.The smart contract governs the storage of download links
              and manages permission access. When a user uploads a file, the
              smart contract records relevant details, including user
              credentials and file information, on the blockchain. This
              decentralized approach ensures data integrity and prevents
              unauthorized alterations.
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
              color: "#000",
            }}
          >
            <Link to="/project3">Next Project</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Project2);
