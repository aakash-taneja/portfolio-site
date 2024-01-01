import transition from "../transition";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import NavTop from "./NavTop";
import ProjectSection from "./ProjectSection";

const Home = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ delay: 1, duration: 1, ease: "easeOut" }}
    //   exit={{ opacity: 0 }}
    // >
    <>
      <NavTop />
      <HeroSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
    // </motion.div>
  );
};

export default transition(Home);
