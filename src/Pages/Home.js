import React from 'react'
import AboutUs from '../Components/AboutUs'
import Counter from '../Components/Counter'
import Dishes from '../Components/Dishes'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import WhyChooseUs from '../Components/WhyChooseUs'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Counter />
        <WhyChooseUs />
        <Dishes />
        <AboutUs />
    </div>
  )
}

export default Home