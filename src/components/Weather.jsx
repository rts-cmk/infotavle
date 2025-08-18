import { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

function WeeklyWeather() {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchForecast() {
      try {
        const res = await fetch(
          "https://api.weatherapi.com/v1/forecast.json?key=9acad37a3d4f476a87c85220250408&q=Roskilde,Denmark&days=7&lang=da",
        );
        if (!res.ok) throw new Error("Kunne ikke hente vejrudsigten");
        const data = await res.json();
        setForecast(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchForecast();
  }, []);

  if (error) return <p>Fejl: {error}</p>;
  if (!forecast) return <p>Indlæser vejrudsigten...</p>;

// console.log(forecast); 
    const weather = forecast.forecast.forecastday.filter(day => {
    const dayOfWeek = new Date(day.date).getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5})

  // console.log(weather)
  

      return (  
        <>
      <ul className="weather__list">
      {weather.map((day) => {

          const isRain = day.day.condition.text.toLowerCase().includes("regn");
          const isClear = day.day.condition.text.toLowerCase().includes("klar");
          const isPartCloudy = day.day.condition.text.toLowerCase().includes("Letskyet");
          const isCloudy = day.day.condition.text.toLowerCase().includes("skyet");
          const isWindy = day.day.condition.text.toLowerCase().includes("blæs");
          const isFogy = day.day.condition.text.toLowerCase().includes("tåge");
          const isSnowing = day.day.condition.text.toLowerCase().includes("sne");
        
            return(
            <li className="weather__day" key={day.date}>
              <strong>
                {new Date(day.date).toLocaleDateString("da-DK", {
                  weekday: "long",
                })}
              </strong>{" "}
              {day.day.avgtemp_c}°C  {day.day.condition.text}
              {console.log(isRain, isClear, isPartCloudy, isCloudy, isWindy, isFogy, isSnowing)}
              <img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
                style={{ marginLeft: "8px" }}
              />

           {isRain ? (<AnimatedBackground icon='RAIN' className="animated__background" />) 
                      : isClear ? (<AnimatedBackground icon="CLEAR_DAY" className="animated__background" />) 
                      : isPartCloudy ? (<AnimatedBackground icon="PARTLY_CLOUDY_DAY"  className="animated__background"/>) 
                      : isCloudy ? (<AnimatedBackground icon="CLOUDY"  className="animated__background"/>)
                      : isWindy ? ( <AnimatedBackground icon="WIND" className="animated__background"/> ) 
                      : isFogy ? ( <AnimatedBackground icon="FOG" className="animated__background"/> ) 
                      : isSnowing ? ( <AnimatedBackground icon="SNOW" className="animated__background"/> ) 
                      : null} 
            </li>
            )

    })}

    </ul>

        </>
      );
}

export default WeeklyWeather;




       
     