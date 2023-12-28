import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
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
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
