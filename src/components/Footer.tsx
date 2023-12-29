import AnimatedLink from "./AnimatedLink";

const Footer = () => {
  return (
    <div
      className="footer-section"
      style={{
        width: "100%",
        // height: "100vh",
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
            <AnimatedLink
              title="aakashtaneja12@gmail.com"
              href="mailto:aakashtaneja12@gmail.com"
              external={true}
            />
          </div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <AnimatedLink
              title="t.me/aakasht12"
              href="https://t.me/aakasht12"
              external={true}
            />
          </div>
        </div>
        <div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <AnimatedLink title="My Projects" href="#work" />
          </div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <AnimatedLink title="About" href="/about" external={true} />
          </div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <AnimatedLink title="Contact" href="#contact" />
          </div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <AnimatedLink
              title="Resume"
              href="https://drive.google.com/file/d/1p8Krl7X5RbpqNMC_mnP6MhiDoA0LLN7J/view?usp=sharing"
              external={true}
            />
          </div>
        </div>
        <div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <AnimatedLink
              title="Twitter"
              href="https://x.com/AakashTaneja6"
              external={true}
            />
          </div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <AnimatedLink
              title="LinkedIn"
              href="https://linkedin.com/in/aakash-taneja"
              external={true}
            />
          </div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <AnimatedLink
              title="Github"
              href="https://github.com/aakash-taneja"
              external={true}
            />
          </div>
          <div className="relative nav-link" style={{ marginTop: "0.5rem" }}>
            <AnimatedLink
              title="Instagram"
              href="https://drive.google.com/file/d/1p8Krl7X5RbpqNMC_mnP6MhiDoA0LLN7J/view?usp=sharing"
              external={true}
            />
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
