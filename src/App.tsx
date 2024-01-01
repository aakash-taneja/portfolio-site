import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Project1 from "./components/Project1";
import "./fonts/Sequel100Black-85.ttf";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";

function App() {
  const location = useLocation();

  // const [cursorActive, setCursorActive] = useState(false);
  // console.log(window.location.pathname);
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

  // const updateCursor = (value: boolean) => {
  //   setCursorActive(value);
  // };

  return (
    <>
      <div
        id="cursor-effect-container"
        className="cursor-effect-container bg-white text-black p-5 text-3xl"
        style={{ width: "100%" }}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/about"
              element={
                // <motion.div
                //   initial={{ opacity: 0 }}
                //   animate={{ opacity: 1 }}
                //   exit={{ opacity: 0 }}
                //   transition={{ duration: 0.5 }}
                //   onAnimationComplete={() => setOverlayVisible(true)}
                // >
                <About />
                // </motion.div>
              }
            />
            <Route
              path="/project1"
              element={
                // <motion.div
                //   initial={{ opacity: 0 }}
                //   animate={{ opacity: 1 }}
                //   exit={{ opacity: 0 }}
                //   transition={{ duration: 0.5 }}
                //   onAnimationComplete={() => setOverlayVisible(true)}
                // >
                <Project1 />
                // </motion.div>
              }
            />
            <Route
              path="/project2"
              element={
                // <motion.div
                //   initial={{ opacity: 0 }}
                //   animate={{ opacity: 1 }}
                //   exit={{ opacity: 0 }}
                //   transition={{ duration: 0.5 }}
                //   onAnimationComplete={() => setOverlayVisible(true)}
                // >
                <Project2 />
                // </motion.div>
              }
            />
            <Route
              path="/project3"
              element={
                // <motion.div
                //   initial={{ opacity: 0 }}
                //   animate={{ opacity: 1 }}
                //   exit={{ opacity: 0 }}
                //   transition={{ duration: 0.5 }}
                //   onAnimationComplete={() => setOverlayVisible(true)}
                // >
                <Project3 />
                // </motion.div>
              }
            />
            <Route
              index
              element={
                // <motion.div
                //   initial={{ opacity: 0 }}
                //   animate={{ opacity: 1 }}
                //   exit={{ opacity: 0 }}
                //   transition={{ duration: 0.5 }}
                //   // onAnimationComplete={() => setOverlayVisible(true)}
                // >
                <Home />
                // </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>

        <div id="cursor" className={`cursor `}></div>
        <div id="cursor-follower" className={`cursor-follower `}></div>
        {/* {overlayVisible && (
          <div
            id="cursor-overlay"
            className="cursor-overlay"
            onAnimationEnd={() => setOverlayVisible(false)}
          ></div>
        )} */}
      </div>
    </>
  );
}

export default App;
