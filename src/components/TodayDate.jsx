
function TodayDate() {
  const today = new Date();
  const formatted = today.toLocaleDateString('da-DK', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return <p>{formatted}</p>;
}

export default TodayDate;
