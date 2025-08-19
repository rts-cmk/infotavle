import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Welcome from "./slides/Welcome";
import Eux from "./slides/klasser/Eux";
import Pauser from "./slides/Pauser";
import WebU from "./slides/klasser/WebU";
import MedieG from "./slides/klasser/MedieG";
import TekniskD from "./slides/klasser/TekniskD";

const InfoCarousel = () => {
  const slides = [<Welcome />, <Eux/>, <WebU/>,<MedieG/>,<TekniskD/>, <Pauser />]

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      });

    }, 8000);


    return () => clearInterval(interval);
  }, [slides]);

  const currentSlide = slides[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
      // key={currentIndex}
      // className="info__slider"
      // initial={{ opacity: 0, }}
      // animate={{ opacity: 1, x: 0 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 2 }}
      >
        {currentSlide}
      </motion.div>
    </AnimatePresence>
  );
};

export default InfoCarousel;

