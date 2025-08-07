import { useState, useEffect } from "react";

const InfoCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Fetch JSON from public folder
    fetch("/data/sampledata.json")
      .then((res) => res.json())
      .then((data) => setSlides(data.slides))
      .catch((error) => console.error("Failed to load data:", error));
  }, []);
import { useState, useEffect } from "react";

const InfoCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Fetch JSON from public folder
    fetch("/data/sampledata.json")
      .then((res) => res.json())
      .then((data) => setSlides(data.slides))
      .catch((error) => console.error("Failed to load data:", error));
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === slides.length - 1 ? 0 : prev + 1
        );
        setFade(true);
      }, 300);
    }, 5000);




    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) return <div>Loading...</div>;

  const currentSlide = slides[currentIndex];

  return (
    <div
      className={`info__slide transition-opacity duration-500 ease-in-out ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="slide__title text-5xl text-center mb-8">
        {currentSlide.title}
      </h2>

    {Array.isArray(currentSlide.description) ? (
  typeof currentSlide.description[0] === "object" ? (
    <table className="mt-4 w-full text-left">
      <thead>
        <tr>
          <th className="pr-4">Klasse</th>
          <th className="pr-4">Underviser</th>
          <th>Lokale</th>
        </tr>
      </thead>
      <tbody>
        {currentSlide.description.map((item, idx) => (
          <tr key={idx}>
            <td className="pr-4">{item.class}</td>
            <td className="pr-4">{item.teacher}</td>
            <td>{item.classroom || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <ul className="slide__description mt-4">
      {currentSlide.description.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  )
) : (
  <p className="slide__description mt-4">{currentSlide.description}</p>
)}

    </div>
  );
};

export default InfoCarousel;





