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
      //   key={currentIndex}
      // initial={{ opacity: 0, x: 100 }}
      // animate={{ opacity: 1, x: 0 }}
      // exit={{ opacity: 0, x: -100 }}
      // transition={{ duration: 0.5 }}
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