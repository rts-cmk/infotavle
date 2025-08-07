import { useState, useEffect } from "react";

const InfoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { title: "Velkommen til Roskilde Tekniske Skole", description: "Vi er meget glade for at se nye elever!!" },
    { title: "Pause", description: "Første pause er kl. 9.40 Frokostpausen er kl. 11.30." },
    { title: "Vigtig information", description: "Husk at tjekke din skema for vigtige datoer." },
    { title: "Kontakt os", description: "Hvis du har spørgsmål, kan du kontakte os på info@rts.dk" },
    { title: "klasser og klasselokaler", description: ["Web Udvikler" + " - Lokale 101", "Data Teknologi" + " - Lokale 102", "Software Udvikler" + " - Lokale 103", "Media Grafiker" + " - Lokale 104"] },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="info__slide">
      <h2 className="text-5xl text-center mb-8">{slides[currentIndex].title}</h2>
      <p>{slides[currentIndex].description}</p>
    </div>
  );
};

export default InfoCarousel;
