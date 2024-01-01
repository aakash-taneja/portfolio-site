import { Link } from "react-router-dom";
import AnimatedLink from "./AnimatedLink";

// const navLinks: any = [
//   { title: "Work", href: "#work" },
//   { title: "About", href: "/about" },
//   { title: "Contact", href: "#contact" },
//   {
//     title: "resume",
//     href: "https://drive.google.com/file/d/1p8Krl7X5RbpqNMC_mnP6MhiDoA0LLN7J/view?usp=sharing",
//   },
// ];
const NavTop = () => {
  return (
    // <div className="nav">
    //   <div className="logo">
    //     <Link className="nav-link" to="/">
    //       aakash
    //     </Link>
    //   </div>
    //   <div className="nav-links">
    //     <Link to="/">Home</Link>
    //     <Link to="/about">ABOUT</Link>
    //     <Link to="/contact">Contact</Link>
    //   </div>
    // </div>
    <div
      className="nav-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        // flexGrow: 1,
        position: "fixed",
        top: "0px",
        color: "#ffffff",
        // left: "0px",
        padding: "2rem",
        // boxSizing: "border-box",
        zIndex: 100,
        fontFamily: "DMSans",
      }}
    >
      <Link
        className="logo"
        style={{ width: "60%", fontSize: "20px", mixBlendMode: "difference" }}
        to={"/"}
      >
        Aakash Taneja
      </Link>
      <div
        className="nav-links"
        style={{
          display: "flex",
          alignItems: "flex-start",

          // paddingTop: "32px",
          // height: "100vh",
          textTransform: "uppercase",
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        <div className="relative nav-link">
          <div
            onClick={() => {
              const section = document.getElementById("work");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <AnimatedLink
              title={"Work"}
              // href={links.href}
              // external={links.external}
            />
          </div>
        </div>
        <div className="relative nav-link">
          <Link to={"/about"}>
            <AnimatedLink
              title={"About"}
              // href={links.href}
              // external={links.external}
            />
          </Link>
        </div>

        <div className="relative nav-link">
          <div
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <AnimatedLink
              title={"Contact"}
              // href={links.href}
              // external={links.external}
            />
          </div>
        </div>
        <div className="relative nav-link">
          <Link
            target="_blank"
            to={
              "https://drive.google.com/file/d/1p8Krl7X5RbpqNMC_mnP6MhiDoA0LLN7J/view?usp=sharing"
            }
          >
            <AnimatedLink
              title={"Resume"}
              // href={links.href}
              // external={links.external}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
