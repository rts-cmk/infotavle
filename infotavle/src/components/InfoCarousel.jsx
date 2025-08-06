import { useState, useEffect } from "react";

const InfoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { title: "Velkommen til Roskilde Tekniske Skole", 
        description: "Vi vil gerne byde dig hjerteligt velkommen som ny elev hos os. Vi er glade for, at du har valgt at starte din uddannelsesrejse netop her, og vi ser frem til at lære dig at kende og støtte dig gennem hele dit forløb.På Roskilde Tekniske Skole er vi stolte af at tilbyde en spændende, praksisnær og fremtidsorienteret uddannelse, hvor der er plads til både faglig fordybelse og personlig udvikling. Her bliver du en del af et stærkt fagligt og socialt fællesskab, hvor vi sammen skaber rammerne for et godt og inspirerende læringsmiljø. Du vil møde engagerede undervisere, der brænder for deres fag og for at hjælpe dig med at nå dine mål. Samtidig får du mulighed for at arbejde med virkelighedsnære projekter, bruge moderne teknologi og få erfaringer, der forbereder dig til en spændende karriere inden for dit valgte område." },
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
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="info__slide">
      <h2 className="slide__title text-5xl text-center mb-8">{slides[currentIndex].title}</h2>
      <p className="slide__description mt-4 text-red-50">{slides[currentIndex].description}</p>
    </div>
  );
};

export default InfoCarousel;
