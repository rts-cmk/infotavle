import { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

function WeeklyWeather() {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchForecast() {
      try {
        const res = await fetch(
          "https://api.weatherapi.com/v1/forecast.json?key=9acad37a3d4f476a87c85220250408&q=Roskilde,Denmark&days=15&lang=da"
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

  // Filter weekdays (Mon–Fri)
  const weather = forecast.forecast.forecastday.filter((day) => {
    const dow = new Date(day.date).getDay()
    return dow >= 1 && dow <= 5
  })

  // Take today's forecast (first item in filtered weekdays)
  const today = weather[0]
  const t = today.day.condition.text.toLowerCase()

  let backgroundIcon = null
  if (t.includes("regn")) backgroundIcon = "RAIN"
  else if (t.includes("klar")) backgroundIcon = "CLEAR_DAY"
  else if (t.includes("let") && t.includes("skyet"))
    backgroundIcon = "PARTLY_CLOUDY_DAY"
  else if (t.includes("skyet")) backgroundIcon = "CLOUDY"
  else if (t.includes("blæs")) backgroundIcon = "WIND"
  else if (t.includes("tåge")) backgroundIcon = "FOG"
  else if (t.includes("sne")) backgroundIcon = "SNOW"

  return (
    <>
      {/* Background shown ONCE, based on today's weather */}
      {backgroundIcon && (
        <AnimatedBackground icon={backgroundIcon}  />
      )}

      <ul className="weather__list">
        {weather.map((day) => (
          <li className="weather__day" key={day.date}>
            <strong>
              {new Date(day.date).toLocaleDateString("da-DK", {
                weekday: "long",
              })}
            </strong>{" "}
            {day.day.avgtemp_c}°C {day.day.condition.text}
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              style={{ marginLeft: "8px" }}
            />
          </li>
        ))}
      </ul>
    </>
  )
}


export default WeeklyWeather


       
     