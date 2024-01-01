import { motion } from "framer-motion";

const transition = (OgComponent: any) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() =>
          console.log("Exit animation complete slide-in")
        }
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() =>
          console.log("Exit animation complete slide-out")
        }
      />
    </>
  );
};

export default transition;
