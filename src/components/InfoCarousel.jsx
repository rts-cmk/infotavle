import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Welcome from "./slides/Welcome";
import Pauser from "./slides/Pauser";
import WebU from "./slides/klasser/WebU";
import MedieG from "./slides/klasser/MedieG";
import TekniskD from "./slides/klasser/TekniskD";
import GrundF from "./slides/klasser/GrundF";


const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const InfoCarousel = () => {
  const slides = [<Welcome />, <GrundF />, <WebU />, <MedieG />, <TekniskD />, <Pauser />];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // always forward
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 11000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={currentIndex}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 1.5 }}
        className="info__slider"
      >
        {slides[currentIndex]}
      </motion.div>
    </AnimatePresence>
  );
};

export default InfoCarousel;

