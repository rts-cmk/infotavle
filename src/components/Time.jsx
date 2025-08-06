import  { useState, useEffect } from 'react';

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every minute
    const interval = setInterval(() => setTime(new Date()), 60000);

    // Sync update to the start of each minute
    const timeout = setTimeout(() => {
      setTime(new Date());
      setInterval(() => setTime(new Date()), 60000);
    }, (60 - time.getSeconds()) * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="text-3xl font-semibold font-mono">
      {formattedTime}
    </div>
  );
}

export default Time;
