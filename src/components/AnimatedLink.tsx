import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedLink = ({ title }: any) => {
  const [isHovered, setHovered] = useState(false);
  // const handleLinkClick = () => {
  //   if (href.startsWith("http")) {
  //     window.open(href, "_blank", "noopener,noreferrer");
  //   } else if (href.startsWith("#")) {
  //     const section = document.getElementById(href.substring(1));
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth" });
  //     }
  //   } else {
  //     window.open(href, "_self", "noopener,noreferrer");
  //   }
  // };
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer"
      // onClick={handleLinkClick}
    >
      <AnimatedWord
        title={title}
        animation={letterAnimation}
        isHovered={isHovered}
      />
      <div className="absolute" style={{ top: 0, color: "#b8ff1f" }}>
        <AnimatedWord
          title={title}
          animation={letterAnimationTwo}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  );
};

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.003,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.003,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const letterAnimationTwo = {
  rest: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const AnimatedLetter = ({ character, animation }: any) => {
  return (
    <motion.span
      variants={animation}
      className="relative inline-block whitespace-nowrap"
    >
      {character}
    </motion.span>
  );
};
const AnimatedWord = ({ title, animation, isHovered }: any) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative"
    >
      {title
        .split("")
        .map((character: any, i: any) =>
          character === " " ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <AnimatedLetter
              key={i}
              character={character}
              animation={animation}
            />
          )
        )}
    </motion.span>
  );
};

export default AnimatedLink;
