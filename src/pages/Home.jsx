import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
        </main>
    );
};

export default Home;
