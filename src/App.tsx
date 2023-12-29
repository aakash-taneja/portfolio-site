import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import NavTop from "./components/NavTop";
import ProjectSection from "./components/ProjectSection";
import "./fonts/Sequel100Black-85.ttf";
import { useEffect, useState } from "react";

function App() {
  const [cursorActive, setCursorActive] = useState(false);
  useEffect(() => {
    const container = document.getElementById(
      "cursor-effect-container"
    ) as HTMLElement;
    const cursor = document.querySelector(".cursor") as HTMLElement;
    const cursorFollower = document.querySelector(
      ".cursor-follower"
    ) as HTMLElement;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      requestAnimationFrame(updateCursor);
    };

    const handleMouseEnter = () => {
      cursor.style.height = "8px";
      cursor.style.width = "8px";
      cursor.style.left = "-50%";
      cursor.style.top = "-50%";
      cursorFollower.style.height = "40px";
      cursorFollower.style.width = "40px";
      cursorFollower.style.left = "-50%";
      cursorFollower.style.top = "-50%";
      // cursor.style.transition = "0.1s ease";
    };

    const handleMouseLeave = () => {
      cursor.style.height = "0px";
      cursor.style.width = "0px";
      cursor.style.left = "-50%";
      cursor.style.top = "-50%";
      cursorFollower.style.height = "0px";
      cursorFollower.style.width = "0px";
      cursorFollower.style.left = "-50%";
      cursorFollower.style.top = "-50%";
      // cursor.style.transition = "0.1s ease";
    };

    const updateCursor = () => {
      const deltaX = mouseX - cursorX;
      const deltaY = mouseY - cursorY;

      cursorX += deltaX / 8;
      cursorY += deltaY / 8;

      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";
      cursorFollower.style.left = cursorX + "px";
      cursorFollower.style.top = cursorY + "px";

      requestAnimationFrame(updateCursor);
    };

    document.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const updateCursor = (value: boolean) => {
    setCursorActive(value);
  };
  return (
    <>
      <div
        id="cursor-effect-container"
        className="cursor-effect-container bg-white text-black p-5 text-3xl"
      >
        {/* navigation */}
        <NavTop />
        <HeroSection />
        <ProjectSection updateCursor={updateCursor} />
        <ContactSection />
        <Footer />
        <div
          id="cursor"
          className={`cursor ${cursorActive ? "active" : ""}`}
        ></div>
        <div
          id="cursor-follower"
          className={`cursor-follower ${cursorActive ? "active" : ""}`}
        ></div>
      </div>
    </>
  );
}

export default App;
