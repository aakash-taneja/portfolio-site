import { Link, useNavigate } from "react-router-dom";
import AnimatedLink from "./AnimatedLink";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div
      className="footer-section"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div className="sayHello">Say Hello</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "1.5rem",
        }}
      >
        <div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <Link target="_blank" to={"mailto:aakashtaneja12@gmail.com"}>
              <AnimatedLink title="aakashtaneja12@gmail.com" />
            </Link>
          </div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <Link target="_blank" to={"https://t.me/aakasht12"}>
              <AnimatedLink title="t.me/aakasht12" />
            </Link>
          </div>
        </div>
        <div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
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

          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
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
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <Link
              target="_blank"
              to={
                "https://drive.google.com/file/d/1p8Krl7X5RbpqNMC_mnP6MhiDoA0LLN7J/view?usp=sharing"
              }
            >
              <AnimatedLink title="Resume" />
            </Link>
          </div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <AnimatedLink title="About" href="/" external={true} />
          </div>
        </div>
        <div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <Link target="_blank" to={"https://x.com/AakashTaneja6"}>
              <AnimatedLink title="Twitter" />
            </Link>
          </div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <Link target="_blank" to={"https://linkedin.com/in/aakash-taneja"}>
              <AnimatedLink title="LinkedIn" />
            </Link>
          </div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <Link target="_blank" to={"https://github.com/aakash-taneja"}>
              <AnimatedLink title="Github" />
            </Link>
          </div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <Link target="_blank" to={"https://hey.xyz/u/aakashtaneja"}>
              <AnimatedLink title="Lens" />
            </Link>
          </div>
        </div>
      </div>
      <hr
        style={{ width: "100%", borderColor: "#676767", marginTop: "5rem" }}
      />
      <h1 className="footercredits">
        Developed by <span className="accent-color"> aakashtaneja</span>
      </h1>
    </div>
  );
};

export default Footer;
