import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css';
import ExploreMenu from './components/Explore/ExploreMenu'
import About from './components/About/About'
import OurSpeciality from './components/OurSpeciality/OurSpeciality'
import Services from './components/Services/Services'
import OurChef from './components/Chef/OurChef'
import Review from './components/Review/Review'
import Footer from './components/Footer/Footer'

const App = () => {

  // React.useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   });
  //   AOS.refresh();
  // }, []);
  
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <ExploreMenu/>
        <OurSpeciality/>
        <OurChef/>
        <Review/>
        <Footer/>
      </div>
    </>
  )
}

export default App
