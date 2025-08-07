
import Time from './components/Time'
import TodayDate from './components/TodayDate'
import WeeklyWeather from './components/Weather'
import Logo from './components/Logo'
import './App.css'
import InfoCarousel from './components/InfoCarousel'



function Home() {

  return (
    <>
     <section className='date-time'>
         <Time />
       <TodayDate />
     
     </section>
     <section className="weather ">
      <WeeklyWeather/>
     </section>
     <section className='info__container'>
        <InfoCarousel /> 
     </section>
      <figure className="logo">
       <Logo />
      </figure>
    </>
    
    
  )
}

export default Home
