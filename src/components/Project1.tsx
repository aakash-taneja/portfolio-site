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
              <h1 className="project-heading">Macha Landing Page</h1>
              <MagneticButton
                onClick={() => {
                  window.open("https://macha.ai");
                }}
                filled="flase"
              >
                <div style={{ display: "flex" }}>
                  <div className="buttonText">Live Link</div>
                  <img src="greenarrow.svg" style={{ marginLeft: "10px" }} />
                </div>
              </MagneticButton>
            </div>
            <div style={{ width: "40%" }}>
              A web-based 2D drawing tool created for soccer coaches and
              strategists to plan and visualise manoeuvres for their team. It
              gives the user complete control to draw curved lines signalling
              direction of play, and to drag/drop assets (such as cones, balls,
              players) anywhere on the pitch. Built for the KNVB (Royal Dutch
              Football Association) whilst working at Momkai in 2018. The tool
              has been integrated into KNVB’s internal systems, used as both a
              strategy and an educational tool - allowing them to create, save
              and share designs with team mates. The example URL I’ve provided
              is a stand-alone demo.
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
            Next Project
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Project1);
