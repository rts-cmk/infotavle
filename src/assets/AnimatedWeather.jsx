import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Skycons from './skycons';


function setIcon(icon, animate, skyconIcon, canvas) {
  skyconIcon.add(canvas, Skycons[icon]);
  if (animate) {
    skyconIcon.play();
  }
}

const AnimatedWeather = ({
  opacity,icon, color, size, animate
}) => {
  const skyconCanvas = useRef(null);

  useEffect(() => {
    const skyconIcon = new Skycons({ color, resizeClear: true });
    const canvas = skyconCanvas.current;
    setIcon(icon, animate, skyconIcon, canvas);

    return () => {
      skyconIcon.remove(canvas);
    };
  }, [icon, color, animate, size, opacity]);

  return <canvas ref={skyconCanvas} width={size} height={size} />;
};

AnimatedWeather.defaultProps = {
  animate: true,
  size: 64,
  color: 'black'
};

AnimatedWeather.propTypes = {
  icon: PropTypes.oneOf([
    'CLEAR_DAY',
    'CLEAR_NIGHT',
    'PARTLY_CLOUDY_DAY',
    'PARTLY_CLOUDY_NIGHT',
    'CLOUDY',
    'RAIN',
    'SLEET',
    'SNOW',
    'WIND',
    'FOG'
  ]).isRequired,
  animate: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};

export default AnimatedWeather;