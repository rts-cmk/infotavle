import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const InfoCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/data/sampledata.json")
      .then((res) => res.json())
      .then((data) => setSlides(data.slides))
      .catch((error) => console.error("Failed to load data:", error));
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) return <div>Loading...</div>;

  const currentSlide = slides[currentIndex];

  return (
    <motion.div
      className="info__slider"
      key={currentIndex}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="slide__title text-5xl text-center mb-8">
        {currentSlide.title}
      </h2>

      {Array.isArray(currentSlide.description) ? (
        typeof currentSlide.description[0] === "object" ? (
          <table className="pt-15 w-full text-left">
            <thead>
              <tr>
                <th>Klasse</th>
                <th>Underviser</th>
                <th>Lokale</th>
              </tr>
            </thead>
            <tbody>
              {currentSlide.description.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.class}</td>
                  <td>{item.teacher}</td>
                  <td>{item.classroom || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <ul className="slide__descript">
            {currentSlide.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}

            {currentSlide.title === "Pauser" && (
              <li>
                <img
                  className="mappy"
                  src="./map.svg"
                  alt="map of canteen and more"
                />
              </li>
            )}
          </ul>
        )
      ) : (
        <p className="slide__description">{currentSlide.description}</p>
      )}
    </motion.div>
  );
};

export default InfoCarousel;
