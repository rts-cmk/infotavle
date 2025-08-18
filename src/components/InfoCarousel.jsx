import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Welcome from "./slides/Welcome";
import Klasser from "./slides/Klasser";
import Pauser from "./slides/Pauser";

const InfoCarousel = () => {
  const slides = [<Welcome />, <Klasser />, <Pauser />]
  const [currentIndex, setCurrentIndex] = useState(0);


   useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      });
    }, 3000);

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




//  useEffect(() => {
//     fetch("/data/sampledata.json")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data); // check the data
//         setSlides(data); // save data in state
//       })
//       .catch((err) => console.error("Error fetching data:", err));
//   }, []);

//   // If slides haven't loaded yet
//   if (slides.length === 0) return <p>Loading...</p>;

//   const currentSlide = slides[currentIndex];