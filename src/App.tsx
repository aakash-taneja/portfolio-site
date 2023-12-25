import "./App.css";
import AnimatedLink from "./components/AnimatedLink";

const navLinks = [
  { title: "Work", href: "#work" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
  { title: "resume", href: "#resume" },
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={{ width: "60%" }}>aakash taneja</div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          // paddingTop: "32px",
          height: "100vh",
          textTransform: "uppercase",
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        {navLinks.map((links) => {
          return (
            <div className="relative">
              <AnimatedLink title={links.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
