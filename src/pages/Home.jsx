import React from 'react'
import Hero from '../components/Home/Hero'
import NewCollection from '../components/Home/NewCollection'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import AboutUs from '../components/Home/AboutUs'
import OurCollection from '../components/Home/OurCollection'

const Home = () => {
    return (
        <div>
            <Hero />
            <NewCollection />
            <WhyChooseUs />
            <AboutUs />
            <OurCollection />
        </div>
    )
}

export default Home
