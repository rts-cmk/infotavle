import { useEffect, useState } from 'react';

function WeeklyWeather() {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchForecast() {
      try {
        const res = await fetch(
          'https://api.weatherapi.com/v1/forecast.json?key=9acad37a3d4f476a87c85220250408&q=Roskilde,Denmark&days=7&lang=da'
        );
        if (!res.ok) throw new Error('Kunne ikke hente vejrudsigten');
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

  return (
    <>
      {/* <h2>Vejrudsigten for hverdage i {forecast.location.name}</h2> */}
      <ul className='weather__list'>
        {forecast.forecast.forecastday
          .filter((day) => {
            const dayOfWeek = new Date(day.date).getDay();
            return dayOfWeek >= 1 && dayOfWeek <= 5; // 1=Mandag, 5=Fredag
          })
          .map((day) => (
            <li className='weather__day' key={day.date}>
              <strong>
                {new Date(day.date).toLocaleDateString('da-DK', {
                  weekday: 'long',
                })}
              </strong>{' '}
               {day.day.avgtemp_c}°C  {day.day.condition.text}
              <img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
                style={{ marginLeft: '8px' }}
              />
            </li>
          ))}
      </ul>
    </>
  );
}

export default WeeklyWeather;
