import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ExploreMenu from './components/Explore/ExploreMenu'
import About from './components/About/About'
import OurSpeciality from './components/OurSpeciality/OurSpeciality'
import Services from './components/Services/Services'
import OurChef from './components/Chef/OurChef'
import Review from './components/Review/Review'
import Footer from './components/Footer/Footer'

const App = () => {

   useEffect(() => {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    return () => document.removeEventListener("contextmenu", (e) => e.preventDefault());
  }, []);
  
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
