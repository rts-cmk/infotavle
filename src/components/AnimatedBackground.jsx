import AnimatedWeather from "../assets/AnimatedWeather";

export default function AnimatedBackground({icon,opacity}) {
  return (
    <div className="animated__background">
      <AnimatedWeather className="anim" icon={icon} color="#f0f8ff" size={400} animate={true} opacity={opacity}/>
    </div>
  );
}

