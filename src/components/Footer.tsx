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
          marginTop: "2rem",
        }}
      >
        <div>
          <div style={{ marginTop: "0.5rem" }}>aakashtaneja12@gmail.com</div>
          <div style={{ marginTop: "0.5rem" }}>t.me/aakasht12</div>
        </div>
        <div>
          <div style={{ marginTop: "0.5rem" }}>My Projects</div>
          <div style={{ marginTop: "0.5rem" }}>About</div>
          <div style={{ marginTop: "0.5rem" }}>Resume</div>
          <div style={{ marginTop: "0.5rem" }}>Contact</div>
        </div>
        <div>
          <div style={{ marginTop: "0.5rem" }}>Twitter</div>
          <div style={{ marginTop: "0.5rem" }}>LinkedIn</div>
          <div style={{ marginTop: "0.5rem" }}>Instagram</div>
          <div style={{ marginTop: "0.5rem" }}>Github</div>
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
