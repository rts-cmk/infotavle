
function TodayDate() {
  const today = new Date();
  const formatted = today.toLocaleDateString('da-DK', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return <p>{formatted}</p>;
}

export default TodayDate;
