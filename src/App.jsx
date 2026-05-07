import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BackToTop from './components/BackToTop';

function App() {

  useEffect(() => {

    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {

      reveals.forEach((section) => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
          section.classList.add('active');
        }

      });

    };

    window.addEventListener('scroll', revealOnScroll);

    revealOnScroll();

  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BackToTop />
    </>
  );

}

export default App;