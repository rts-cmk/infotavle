import AnimatedWeather from "../assets/AnimatedWeather";

export default function AnimatedBackground() {
  return (
    <div className="animated__background">
      <AnimatedWeather icon="WIND" color="#79baec" size={500} animate={true} />
    </div>
  );
}

