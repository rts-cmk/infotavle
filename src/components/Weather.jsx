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

          const isRain = day.day.condition.text.toLowerCase().trim("regn");
          const isClear = day.day.condition.text.toLowerCase().trim("klar");
          const isPartCloudy = day.day.condition.text.toLowerCase().trim("Letskyet");
          const isCloudy = day.day.condition.text.toLowerCase().trim("skyet");
          const isWindy = day.day.condition.text.toLowerCase().trim("blæs");
          const isFogy = day.day.condition.text.toLowerCase().trim("tåge");
          const isSnowing = day.day.condition.text.toLowerCase().trim("sne");
        
            return(
            <li className="weather__day" key={day.date}>
              <strong>
                {new Date(day.date).toLocaleDateString("da-DK", {
                  weekday: "long",
                })}
              </strong>{" "}
              {day.day.avgtemp_c}°C  {day.day.condition.text}
              <img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
                style={{ marginLeft: "8px" }}
              />

           {isRain ? (<AnimatedBackground icon="RAIN" className="animated__background" />) 
                      : isClear ? (<AnimatedBackground icon="CLEAR_DAY" />) 
                      : isPartCloudy ? (<AnimatedBackground icon="PARTLY_CLOUDY_DAY" />) 
                      : isCloudy ? (<AnimatedBackground icon="CLOUDY" />)
                      : isWindy ? ( <AnimatedBackground icon="WIND"/> ) 
                      : isFogy ? ( <AnimatedBackground icon="FOG"/> ) 
                      : isSnowing ? ( <AnimatedBackground icon="SNOW"/> ) 
                      : null} 
            </li>
            )

    })}

    </ul>

        </>
      );
}

export default WeeklyWeather;




       
     