
import Time from './components/Time'
import TodayDate from './components/TodayDate'
import WeeklyWeather from './components/Weather'
import Logo from './components/Logo'
import './App.css'



function Home() {

  return (
    <>
     <section className='date-time'>
       <TodayDate />
       <Time />
     </section>
     <section className="weather ">
      <WeeklyWeather/>
     </section>
     <section className='info__container'>
       <p>Information</p>
     </section>
      <figure className="logo">
       <Logo />
      </figure>
  
    </>
  )
}

export default Home
