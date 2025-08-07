import SkoleInfo from "../assets/skoleklasser";
import { useState, useEffect } from 'react';

function Klasser() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("../data/sampledata.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
}

export default Klasser;
