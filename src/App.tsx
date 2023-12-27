import "./App.css";
import AnimatedLink from "./components/AnimatedLink";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavTop from "./components/NavTop";
import ProjectSection from "./components/ProjectSection";
import "./fonts/Sequel100Black-85.ttf";

function App() {
  return (
    <>
      {/* navigation */}
      <NavTop />
      <HeroSection />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default App;
