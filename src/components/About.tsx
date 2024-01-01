import transition from "../transition";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import NavTop from "./NavTop";
import { motion } from "framer-motion";

const About = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ delay: 1, duration: 1, ease: "easeOut" }}
    // >
    <>
      <NavTop />
      <HeroSection />
      <Footer />
    </>
  );
};

export default transition(About);
