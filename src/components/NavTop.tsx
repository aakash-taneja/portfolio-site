import AnimatedLink from "./AnimatedLink";

const navLinks: any = [
  { title: "Work", href: "#work", external: false },
  { title: "About", href: "/about", external: true },
  { title: "Contact", href: "#contact", external: false },
  {
    title: "resume",
    href: "https://drive.google.com/file/d/1p8Krl7X5RbpqNMC_mnP6MhiDoA0LLN7J/view?usp=sharing",
    external: true,
  },
];
const NavTop = () => {
  return (
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
      <div
        className="logo"
        style={{ width: "60%", fontSize: "20px", mixBlendMode: "difference" }}
      >
        Aakash Taneja
      </div>
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
        {navLinks.map((links: any, index: any) => {
          return (
            <div className="relative nav-link" key={index}>
              <AnimatedLink
                title={links.title}
                href={links.href}
                external={links.external}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavTop;
