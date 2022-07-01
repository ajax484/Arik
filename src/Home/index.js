import React from 'react';
import Hero from './Hero';
import Destinations from './Destinations.jsx';
import ChangingText from './ChangingText';
import TouristSpots from './TouristSpots';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Footer from '../Footer';

export default function Home() {
    return (
        <main>
            <Hero />
            <Destinations />
            <ChangingText />
            <TouristSpots />
            <Testimonials />
            <Blog />
            <Footer />
        </main>

    )
}
