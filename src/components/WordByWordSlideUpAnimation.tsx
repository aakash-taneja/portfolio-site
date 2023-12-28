import { motion, useAnimation } from "framer-motion";

const WordByWordSlideUpAnimation = ({ text }: any) => {
  const controls = useAnimation();
  const animateText = () => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  };

  return (
    <motion.span
      custom={0.5} // Adjust the delay between each word
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      onAnimationComplete={() => animateText()} // Trigger the animation for the next word
    >
      {text}
    </motion.span>
  );
};

export default WordByWordSlideUpAnimation;
