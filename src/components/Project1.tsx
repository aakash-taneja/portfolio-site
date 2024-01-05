import { Link } from "react-router-dom";
import transition from "../transition";
import MagneticButton from "./MagneticButton";
import NavTop from "./NavTop";

const Project1 = () => {
  return (
    <>
      <NavTop />
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundImage: `url('Macha.jpg')`,
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
            paddingLeft: "5rem",
            paddingRight: "5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "50%" }}>
              <h1 className="project-heading">Macha Landing Page And Studio</h1>
              <MagneticButton
                onClick={() => {
                  window.open(
                    "https://0xaakashtaneja.notion.site/0xaakashtaneja/Macha-2190928fb7354898842e87cb7bbcc90c"
                  );
                }}
                filled="flase"
              >
                <div style={{ display: "flex" }}>
                  <div className="buttonText">More Details</div>
                  <img src="greenarrow.svg" style={{ marginLeft: "10px" }} />
                </div>
              </MagneticButton>
            </div>
            <div style={{ width: "40%" }}>
              Over the past year, I've been working as a Product Engineer at
              Macha. Initially starting as a frontend engineer, I played a key
              role in developing Macha Messenger, a decentralized messaging
              platform. I worked both on its web and mobile version with group
              chat and wallet-to-wallet chats powered by XMTP. Moving forward, I
              took the lead in developing Macha's landing page, and ensured the
              successfull end to end development of landing page, i was also
              managing two interns, and my role went beyond coding and i was
              working hand in hand with design and marketing teams for visual
              aesthetics and branding part of it . My journey at Macha has been
              dynamic, involving frontend, backend, and leadership
              responsibilities, showcasing my adaptability and commitment to
              delivering quality products.
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              right: "7rem",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}
          >
            <Link to="/project2">Next Project</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Project1);
