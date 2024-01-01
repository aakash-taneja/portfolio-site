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
              <h1 className="project-heading">
                Elaborate Project title with attached link
              </h1>
              <MagneticButton />
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
              // width: "100%",
              // display: "flex",
              // justifyContent: "flex-end",
            }}
          >
            Next Project
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Project3);
