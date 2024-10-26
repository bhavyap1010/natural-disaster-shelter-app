import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';

const Home = () => {
    return (
        <section>
            <Hero />
            <Mission />
            <Partners />
            <Testimonials />
            <Statistics />
        </section>
    );
};

export default Home;