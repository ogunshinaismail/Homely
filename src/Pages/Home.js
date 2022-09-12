import React from 'react'
import AboutUs from '../Components/AboutUs'
import Counter from '../Components/Counter'
import Dishes from '../Components/Dishes'
import Footer from '../Components/Footer'
import GetOurApp from '../Components/GetOurApp'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Testimonials from '../Components/Testimonials'
import WhyChooseUs from '../Components/WhyChooseUs'
// import { useAuthContext } from '../Hooks/useAuthContext'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Counter />
        <WhyChooseUs />
        <Dishes />
        <AboutUs />
        <GetOurApp />
        <Testimonials />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home