import { Link, useNavigate } from "react-router-dom";
import AnimatedLink from "./AnimatedLink";
// import { useState } from "react";

const NavTop = () => {
  // const [isMenuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <Link className="logo" to={"/"}>
        Aakash Taneja
      </Link>
      <div className="nav-links">
        <div className="relative nav-link">
          <div
            onClick={() => {
              const section = document.getElementById("work");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/#project");
              }
            }}
          >
            <AnimatedLink title={"Work"} />
          </div>
        </div>
        {/* <div className="relative nav-link">
          <Link to={"/about"}>
            <AnimatedLink
              title={"About"}
              // href={links.href}
              // external={links.external}
            />
          </Link>
        </div> */}

        <div className="relative nav-link">
          <div
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/#contact_section");
              }
            }}
          >
            <AnimatedLink title={"Contact"} />
          </div>
        </div>
        <div className="relative nav-link">
          <Link
            target="_blank"
            to={
              "https://drive.google.com/file/d/1p8Krl7X5RbpqNMC_mnP6MhiDoA0LLN7J/view?usp=sharing"
            }
          >
            <AnimatedLink title={"Resume"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
